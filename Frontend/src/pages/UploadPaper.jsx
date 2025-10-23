import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PastPapersContext } from '../components/store/PaperListContext';
import { ThemeContext } from '../components/store/ThemeContext';
import { postPaper } from '../apis/paperApi';
import { AuthContext } from '../components/store/AuthContext';
import { jsPDF } from "jspdf"; // 🆕 for PDF generation



const Upload = () => {
  const navigate = useNavigate();
  const { addPaper } = useContext(PastPapersContext);
  const { darkMode } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  const [instructorName, setIntructorName] = useState('');
  const [examType, setExamType] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [semester, setSemester] = useState('');
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true); //  loader state


  // 🆕 Helper: Convert File to Base64
  const readImageAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handlePaperSubmit = async (e) => {
    setLoading(false)
    e.preventDefault();
    try {
      if (!files.length) return alert("Please select at least one image file.");

      // 🆕 Step 1: Convert multiple images to a single PDF
      const pdf = new jsPDF();
      for (let i = 0; i < files.length; i++) {
        const imgData = await readImageAsDataURL(files[i]);
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      }

      const pdfBlob = pdf.output("blob");

      //  Step 2: Upload PDF to Cloudinary directly from frontend
      const formData = new FormData();
      const pdfFile = new File([pdfBlob], "past_paper.pdf", { type: "application/pdf" });
      formData.append("file", pdfFile);
      formData.append("upload_preset", "Past_Paper_Project"); //  Cloudinary preset
      formData.append("folder", "past_papers"); //  folder name in cloudinary
       
      
      const cloudinaryResponse = await fetch(
        "https://api.cloudinary.com/v1_1/dc7tstzyu/auto/upload", // 🧩 replace with your cloud name
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudData = await cloudinaryResponse.json();
      if (!cloudData.secure_url) throw new Error("Cloudinary upload failed");

       let fileUrl="";
        fileUrl = cloudData.secure_url;
      console.log("✅ Uploaded PDF URL:", fileUrl);

      // 🧾 Step 3: Post paper details to your backend
      const paperDetail = {
        instructorName,
        examType,
        courseName,
        courseCode,
        semester,
        uploader: user.registrationNumber,
        fileUrl,
      };

      const data = await postPaper(paperDetail);

      const paperObj = {
        instructorName: data.data.instructorName,
        examType: data.data.examType,
        courseName: data.data.courseName,
        courseCode: data.data.courseCode,
        semester: data.data.semester,
        uploader: data.data.uploader,
        fileUrl: data.data.fileUrl,
      };

      addPaper(paperObj);

      // reset form
      setIntructorName('');
      setExamType('');
      setCourseName('');
      setCourseCode('');
      setSemester('');
      setFiles([]);
   
        navigate("/upload/paper/approval");
      
    } catch (err) {
      console.error("Error submitting paper:", err);
      alert("Upload failed. Check console for details.");
    } finally {
    setLoading(true); // ✅ stop loader
  }

  };

  return (
    <div
      className={`flex flex-col items-center gap-5 w-full min-h-screen text-center pt-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="font-bold text-2xl">Enter detail of Past Paper</h1>

      <form
        onSubmit={handlePaperSubmit}
        className={`flex flex-col w-[350px] min-h-[320px] rounded p-4 gap-3 shadow-md transition-colors duration-500 ${
          darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-300"
        }`}
      >
        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
              : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
          }`}
          onChange={(e) => setIntructorName(e.target.value)}
          type="text"
          value={instructorName}
          placeholder="Enter Instructor Name"
        />

        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
              : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
          }`}
          onChange={(e) => setExamType(e.target.value)}
          type="text"
          value={examType}
          placeholder="Enter Exam Type i.e Final, Mid"
        />

        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
              : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
          }`}
          onChange={(e) => setCourseName(e.target.value)}
          type="text"
          value={courseName}
          placeholder="Enter Course Name"
        />

        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
              : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
          }`}
          onChange={(e) => setCourseCode(e.target.value)}
          type="text"
          value={courseCode}
          placeholder="Enter Course Code"
        />

        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
              : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
          }`}
          onChange={(e) => setSemester(e.target.value)}
          type="text"
          value={semester}
          placeholder="Enter Semester of the Paper i.e FA23,FA24 etc"
        />

        {/* 🆕 file input for multiple images */}
        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border border-gray-600 text-red-500 focus:ring-gray-500"
              : "bg-gray-100 border border-gray-400 text-gray-900 focus:ring-gray-500"
          }`}
          type="file"
          accept=".jpg,.jpeg,.png"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files))}
        />

        <button
          type="submit"
          className={`rounded p-2 cursor-pointer font-semibold transition ${
            darkMode
              ? "bg-gradient-to-r from-purple-800 to-purple-400 text-white hover:bg-purple-500"
              : "bg-gradient-to-r from-green-600 to-green-400 text-gray-900 hover:bg-green-500"
          }`}
          disabled={!loading} // disable button when loading
        >
           {!loading ? "Uploading... Wait a Bit" : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default Upload;




