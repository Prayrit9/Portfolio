import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects"

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
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

