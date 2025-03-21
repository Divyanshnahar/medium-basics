
import { Blogcard } from "../components/ Blogcard"
import { Appbar } from "../components/Appbar"
import { useBlog } from "../hooks";

export const Blogs = () => {
    const {loading , blogs } = useBlog();
    if(loading){
        return <div>
            loading...
            {/* <span className="loading loading-spinner loading-md"></span> */}
        </div>
    }


    return <div className="min-h-screen bg-gray-900 px-4">

        <div>
        <Appbar />
       {
            blogs.map(blog =><Blogcard
            authorName={blog.author.name || ""}
            title = {blog.title}
            content = {blog.content}
            publishedDate="2021-09-01"
            />

            )
       }
        </div>
       
        </div>
        
}