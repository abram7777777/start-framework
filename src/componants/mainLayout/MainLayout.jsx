import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../footer/Footer";

function Mainlayout() {
    return ( 
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
     );
}

export default Mainlayout;