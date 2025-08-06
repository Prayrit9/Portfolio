import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-gray-600 border-t-indigo-500 rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Loading Portfolio
          </h2>
          <p className="text-gray-400 text-sm mt-2">Preparing something amazing...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
