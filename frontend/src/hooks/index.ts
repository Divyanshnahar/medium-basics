import {  useEffect, useState } from "react";
import { BackendUrl } from "../config";
import axios from "axios";



interface Blog {
    "id": number;
    "title": string;
    "content": string;
    "author" : {
        
        "name": string; }

}
export const useBlog = () => {

    const [loading , setLoading] = useState(true);
    const [blogs , setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BackendUrl}/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            }
        })
        .then(response => {
            setBlogs(response.data.blogs);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching blogs:", error);
            setLoading(false);
            // Optionally set an error state here if you want to show error messages to users
        });
    }, []);

    return {loading , blogs}
}

   