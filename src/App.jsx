import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componants/home/Home'
import About from './componants/about/About'
import Protofoilo from './componants/protofolio/Protofoilo'
import Contact from './componants/contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from './componants/MainLayout/MainLayout'
import Notfound from './componants/notfound/Notfound'
import 'flowbite-react'
import 'flowbite'
import '@fortawesome/fontawesome-free/css/all.min.css'


function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element:<Mainlayout/>,
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