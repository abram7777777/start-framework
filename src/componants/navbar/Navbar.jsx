import { NavLink } from "react-router-dom";

function Navbar() {
    return ( 
        <>


<nav className="bg-[#2C3E50] p-4 fixed z-10 w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <NavLink to={"/"} className="flex items-center font-extrabold text-white text-2xl lg:text-4xl  rtl:space-x-reverse">START FRAMEWORK</NavLink>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:ring-4" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full lg:block lg:w-auto " id="navbar-default">
      <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0">
        <li>
          <NavLink to={"about"} className="focus:bg-[#1ABC9C] inline-block py-2 px-3 text-white font-bold rounded-lg lg:border-0 lg:p-2">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to={"protofolio"} className="focus:bg-[#1ABC9C] inline-block py-2 px-3 text-white font-bold rounded-lg lg:border-0 lg:p-2">PORTFOLIO</NavLink>
        </li>
        <li>
          <NavLink to={"contact"} className="focus:bg-[#1ABC9C] inline-block py-2 px-3 text-white font-bold rounded-lg lg:border-0 lg:p-2">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
     );
}

export default Navbar;