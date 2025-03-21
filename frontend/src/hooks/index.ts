import { use, useEffect, useState } from "react";
import { BackendUrl } from "../config";
import axios from "axios";

export const useBlog = () => {

    const [loading , setLoading] = useState(true);
    const [blogs , setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`${BackendUrl}/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            }
        })
        .then(response => {
            setBlogs(response.data);
            setLoading(false);
        })
        
    }, []);

    return {loading , blogs}
}

   