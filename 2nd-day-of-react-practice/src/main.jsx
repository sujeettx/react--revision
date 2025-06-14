import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { About, Contact, Home, Github} from './Components'
import { fetchGithubInfo } from './Components/Github'
const router = createBrowserRouter([
  {
  path:"/",
  element :<Layout/>,
  children : [
    {
      path :"",
      element : <Home/>
    },
    {
      path:"/about",
      element :<About/>
    },
    {
      path:"/contact",
      element :<Contact/>
    },
    {
      path :"/Github",
      element : <Github/>,
      loader: fetchGithubInfo
    }
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
