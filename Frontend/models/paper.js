import mongoose from "mongoose";

const paperSchema = new mongoose.Schema(
  {
    instructorName: {
      type: String,
      required: true,
    },
    examType: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    courseCode: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// Prevent model overwrite issue in serverless
export default mongoose.models.Paper || mongoose.model("Paper", paperSchema);