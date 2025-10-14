import { useEffect, useContext, useState } from "react";
import { AdminContext } from "../../components/store/AdminContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Custom hook for count-up animation
const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const {
    adminPaperList,
    adminReviewList,
    adminUserList,
    fetchAdminPapers,
    fetchAdminReviews,
    fetchAdminUsers,
  } = useContext(AdminContext);

  useEffect(() => {
    fetchAdminPapers();
    fetchAdminReviews();
    fetchAdminUsers();
  }, []);

  // Animated numbers
  const papersCount = useCountUp(adminPaperList.length);
  const usersCount = useCountUp(adminUserList.length);
  const reviewsCount = useCountUp(adminReviewList.length);

  // Prepare chart data (example: papers & reviews per month)
  const chartData = Array.from({ length: 6 }).map((_, i) => {
    const month = new Date(new Date().setMonth(new Date().getMonth() - i))
      .toLocaleString("default", { month: "short" });

    return {
      month,
      papers: adminPaperList.filter(
        (p) => new Date(p.createdAt).getMonth() === new Date().getMonth() - i
      ).length,
      reviews: adminReviewList.filter(
        (r) => new Date(r.createdAt).getMonth() === new Date().getMonth() - i
      ).length,
    };
  }).reverse();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start p-10 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center cursor-pointer text-gray-800 dark:text-gray-100"
      >
        📊 Admin Dashboard
      </motion.h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl mb-12">
        {/* Papers Card */}
        <motion.div
          onClick={() => navigate("/admin/papers")}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800  cursor-pointer shadow-xl rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform"
        >
          <span className="text-5xl">📄</span>
          <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {papersCount}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">Total Papers</p>
        </motion.div>

        {/* Users Card */}
        <motion.div
          onClick={() => navigate("/admin/users")}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 shadow-xl  cursor-pointer rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform"
        >
          <span className="text-5xl">👥</span>
          <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {usersCount}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">Total Users</p>
        </motion.div>

        {/* Reviews Card */}
        <motion.div
          onClick={() => navigate("/admin/reviews")}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 shadow-xl cursor-pointer rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform"
        >
          <span className="text-5xl">⭐</span>
          <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {reviewsCount}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">Total Reviews</p>
        </motion.div>
      </div>

      {/* Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          📈 Papers & Reviews (Last 6 Months)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="papers" stroke="#2563eb" strokeWidth={3} />
            <Line type="monotone" dataKey="reviews" stroke="#f59e0b" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default Dashboard;
