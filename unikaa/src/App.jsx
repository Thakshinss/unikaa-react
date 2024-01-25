import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Faq from './Pages/Faq'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import AppLayout from './Layout/AppLayout'

const router =createBrowserRouter([
  {
    element:<AppLayout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/product",
        element:<Product/>
      },
      {
        path:"/faq",
        element:<Faq/>
      },
      {
        path:"/gallery",
        element:<Gallery/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
    ]
  },
  
])

function App() {

  return <RouterProvider router={router} className='font-kumbh' />
}

export default App
