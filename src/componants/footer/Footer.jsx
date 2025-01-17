function Footer() {
    return ( 
        <div className="bg-[#2C3E50] w-full">
            <div className="flex justify-around items-center m-auto h-[40%] py-24 pr-9 sm:flex-row flex-col gap-9 sm:gap-0">
            <div className="flex flex-col items-center gap-3 w-1/3 ">
                <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center">LOCATION</h2>
                <p className="text-white text-center ">2215 John Daniel Drive</p>
                <p className="text-white text-center">Clark, MO 65243</p>
            </div>
            <div className="flex flex-col items-center gap-3 w-1/3">
                <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center">AROUND THE WEB</h2>
                <div className="flex gap-3">
                    <div className="icon"><i class="fa-brands fa-facebook"></i></div>
                    <div className="icon"><i class="fa-brands fa-twitter"></i></div>
                    <div className="icon"><i class="fa-brands fa-linkedin-in"></i></div>
                    <div className="icon"><i class="fa-solid fa-globe"></i></div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3 w-1/3">
                <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center">ABOUT FREELANCER</h2>
                <p className="text-white max-w-[90%] text-center">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
            </div>
            <div className="bg-[#1A252F] w-full py-6">
                <p className="text-white text-center">Copyright © Your Website 2021</p>
            </div>
        </div>
     );
}

export default Footer;