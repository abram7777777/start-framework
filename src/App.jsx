
import './App.css'
import Home from './componants/home/Home'
import About from './componants/about/About'
import Protofoilo from './componants/protofolio/Protofoilo'
import Contact from './componants/contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Notfound from './componants/notfound/Notfound'
import 'flowbite-react'
import 'flowbite'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Layout from './componants/Layout/Layout';


function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element:<Layout/>,
      children:[
        {index:true , element:<Home/>},
        {path:"about" , element:<About/>},
        {path:"protofolio" , element:<Protofoilo/>},
        {path:"contact" , element:<Contact/>},
        {path:"*" , element:<Notfound/>}
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App