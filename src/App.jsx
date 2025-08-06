import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";

const Layout = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/Projects',
          element: <Projects />,
        },
        {
          path: '/Certifications',
          element: <Certifications />,
        }
      ],
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;

