
import { Blogcard } from "../components/ Blogcard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks";



export const Blogs = () => {
    const {loading , blogs } = useBlogs();
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <div className="spin-loader"></div>
            </div>
        );
    }


    return <div className="min-h-screen bg-gray-900 px-4">

        <div>
        <Appbar authorName="hasToBeChanged" />
       {
            blogs.map(blog => <Blogcard
            id = {blog.id}
            authorName={blog.author.name || "Anonymous"}
            title = {blog.title}
            content = {blog.content}
            publishedDate="2021-09-01"
            />
            )
       }
        </div>
       
        </div>
        
}