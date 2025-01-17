import { Link } from "react-router-dom";


function Notfound() {
    return ( 
        <div className="h-[97vh] flex flex-col justify-center items-center">
        <h1 className="text-[#2C3E50]">not-found works!</h1>
        <Link to="/" className="text-2xl text-[#2C3E50]">back to home</Link>
        </div>
     );
}

export default Notfound;