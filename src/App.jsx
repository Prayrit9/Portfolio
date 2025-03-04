import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects"
import Certifications from "./pages/Certifications"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <div className='flex'> 
            <Home />
          </div>
        </>
      ),
    },
    {
      path: '/Projects',
      element: (
        <>
          <Navbar />
          <div className='flex'> 
            <Projects />
          </div>
        </>
      ),
    },
    {
      path: '/Certifications',
      element: (
        <>
          <Navbar />
          <div className='flex'> 
            <Certifications />
          </div>
        </>
      ),
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

