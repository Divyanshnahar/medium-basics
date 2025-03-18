import { Avatar } from "./ Blogcard"

export const Appbar = () => {
    return <div className="border-b border-gray-700 flex justify-between items-center px-6 py-4 bg-gray-900">
        <div className="text-white text-xl font-bold hover:text-gray-300 transition-colors duration-200">
            <a href="/blogs">Medium</a>
        </div>
        <div className="flex items-center">
            <div className="hidden sm:flex mr-6">
                <a href="/signup" className="text-white hover:text-gray-300 transition-colors duration-200">Sign up</a>
                <a href="/signin" className="ml-4 text-white hover:text-gray-300 transition-colors duration-200">Sign in</a>
            </div>
            <Avatar name="Divyansh Nahar" />
        </div>
    </div>
}