import { Link } from "react-router-dom";
import { Quote } from "../components/Quote";

export const Signup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex flex-col justify-center items-center px-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Create an account</h2>
          <p className="text-gray-500 mb-6">
            Already have an account? <Link to="/signin" className="text-black underline">Login</Link>
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                placeholder="m@example.com"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gray-100 flex justify-center items-center">
        <Quote />
      </div>
    </div>
  );
};
