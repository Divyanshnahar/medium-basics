import { Avatar } from "./ Blogcard"
import { Link } from "react-router-dom"




export const Appbar = () => {

    const jwt = localStorage.getItem("token");
    let authorNameFromJwt = "";
    if (jwt) {
        const payload = JSON.parse(atob(jwt.split('.')[1]));
        authorNameFromJwt = payload.authorName;
    }


    return <div className="border-b border-gray-700 flex justify-between items-center px-6 py-4 bg-gray-900">
        <div className="flex items-center text-white text-xl font-bold hover:text-gray-300 transition-colors duration-200">
            <a href="/blogs">Medium</a>
        </div>
        <div className="flex items-center">
            <div className="hidden sm:flex items-center mr-6">
                <a href="/signup" className="text-white hover:text-gray-300 transition-colors duration-200">Sign up</a>
                <a href="/signin" className="ml-4 text-white hover:text-gray-300 transition-colors duration-200">Sign in</a>
            </div>
            <div>
                <Link to="/publish">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200 mr-4">Button</button>
                </Link>
            </div>
                
            <Avatar name={authorNameFromJwt || "anonymous"}/>
        </div>
    </div>
}