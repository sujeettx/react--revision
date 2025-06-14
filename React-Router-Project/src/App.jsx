import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Feedback from './Pages/Feedback';
import Dashboard from './Pages/Dashboard';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Student from './Components/Student';
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Feedback",
        element: <Feedback />
      },
      {
        path: "/Dashboard",
        element: <Dashboard />
      },
      {
        path :"/Student/:id",
        element : <Student/>
      }
    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
