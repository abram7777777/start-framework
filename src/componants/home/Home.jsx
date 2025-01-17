function Home() {
    return ( 
        <div className="w-full h-[97vh] bg-[#1ABC9C] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-7 mt-16">
                <img className="w-60" src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="" />
                <h1 className="text-white text-3xl lg:text-5xl font-bold">START FRAMEWORK</h1>
                <span className="relative star-after star-before after:bg-white before:bg-white text-center"><i className="fa-solid text-white fa-star "></i></span>
                <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        
        </div>
         );
}

export default Home;