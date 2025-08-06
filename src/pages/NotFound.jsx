import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              404
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Page Not Found
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist. 
            It might have been moved or deleted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="glass px-6 py-3 rounded-xl font-medium transition-all duration-300 glow group flex items-center gap-2 justify-center"
              >
                <Home size={20} />
                Go Home
              </Link>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-xl font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <ArrowLeft size={20} />
              Go Back
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
