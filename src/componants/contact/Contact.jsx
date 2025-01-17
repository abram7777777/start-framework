function Contact() {
    return ( 
        <>
        <div className="px-5 sm:w-[50%] m-auto h-[100vh] flex flex-col gap-10 justify-center items-center bg-white pt-24">
        <h1 className="text-[#2C3E50] text-3xl lg:text-5xl font-bold mt-5 text-center">CONATACT SECTION</h1>
        <span className="relative star-after star-before after:bg-[#2C3E50] before:bg-[#2C3E50] text-center "><i className="fa-solid text-[#2C3E50] fa-star "></i></span>
        <input type="text" className="block py-2.5 ps-2 pe-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none-blue-500 focus:outline-none focus:ring-0 focus:border-[#1ABC9C] " placeholder="userName" />
            <input type="number" className="block py-2.5 ps-2 pe-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none-blue-500 focus:outline-none focus:ring-0 focus:border-[#1ABC9C] " placeholder="userAge" />
            <input type="email" className="block py-2.5 ps-2 pe-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none-blue-500 focus:outline-none focus:ring-0 focus:border-[#1ABC9C] " placeholder="userEmail" />
            <input type="password" className="block py-2.5 ps-2 pe-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none-blue-500 focus:outline-none focus:ring-0 focus:border-[#1ABC9C] " placeholder="userPassword" />
            <button className="w-32 py-2 self-start rounded bg-[#1ABC9C] text-white mb-6 ">send Message</button>
        </div>
        </>
     );
}

export default Contact;