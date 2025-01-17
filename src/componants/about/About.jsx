function About() {
    return ( 
        <>
                <div className="w-full h-[97vh] bg-[#1ABC9C] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-7 pt-10">
                <h2 className="text-white text-3xl lg:text-5xl font-bold mt-">ABOUT COMPONENT</h2>
                <span className="relative star-after star-before after:bg-white before:bg-white text-center"><i className="fa-solid text-white fa-star "></i></span>
                <div className=" px-20 md:px-40 md:flex gap-5">
                    <p className="mb-5 text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className="mb-5 text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        
        </div>
        </>
     );
}

export default About;