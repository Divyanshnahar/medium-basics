import { Appbar } from "../components/Appbar"

export const Publish = () =>{
    return <div>
        <Appbar  />
        
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="w-full max-w-2xl p-8 bg-black rounded-xl shadow-md">
            <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
                    Title
                </label>
                <input
                    className="w-full px-3 py-2 text-gray-900 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Enter the title"
                />
            </div>
            <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    className="w-full px-3 py-2 text-gray-900 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="description"
                    placeholder="Enter the description"
                    rows={5}
                />
            </div>
            <button className="w-full px-4 py-2 text-white font-bold bg-blue-600 rounded hover:bg-blue-700 transition duration-200">
            Upload
            </button>
        </div>
    </div>
    </div>
}