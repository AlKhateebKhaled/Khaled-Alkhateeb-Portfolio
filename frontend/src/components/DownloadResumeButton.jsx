import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const DownloadResumeButton = () => {
  return (
    <motion.div
      className="text-center mt-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.a
        href="/Khaled Al-Khateeb Resume.pdf"
        download="Khaled Al-Khateeb Resume.pdf"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#1D4ED8",
          color: "#ffffff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center text-sm shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <FaDownload className="mr-3 text-lg" />
        Resume
      </motion.a>
    </motion.div>
  );
};

export default DownloadResumeButton;
