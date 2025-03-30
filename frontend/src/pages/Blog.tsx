import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const {loading ,blog} = useBlog({
        id : id || ""
    });

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <div className="spin-loader"></div>
            </div>
        );
    }
    
    if (!blog) {
        return <div>Blog not found</div>;
    }

    return <div className="min-h-screen bg-gray-900">
        <FullBlog 
            id={blog.id}
            title={blog.title}
            content={blog.content}
            author={{ name: blog.author.name }}
        />
    </div>
}