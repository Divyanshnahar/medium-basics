import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@divyanshnahar15/medium-common";
import axios from 'axios';
import { BackendUrl } from "../config";
export const Auth = ({type}:{type:"signup" | "signin"}) => {
    const [postInputs , setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });
    const navigate = useNavigate();
    async function Signuprequest() {
        const url = `${BackendUrl}/user/${type === "signup" ? "signup" : "signin"}`; 
        try {
            const response = await axios.post(url,postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            
            navigate('/blog');

            
            // You can handle the successful response here
            return response;
        } catch (error) {
            alert("There was an error! Please check your inputs and try again.");
            console.error("There was an error!", error);
        }
    }
    return <div className="h-screen flex justify-center flex-col items-center">
       
        <div className="text-2xl font-bold mb-2">
            Create an Account
        </div>

        <div className="text-gray-500 mb-6">
            {type === "signup" ? "Already have an account" : "Don't have an account"}?
            {type === "signup" ? " Login " : "Sign Up"} here 
            {type === "signup" ? <Link to="/signin" className="text-black underline"> Login</Link> : <Link to="/signup" className="text-black underline">Sign Up</Link>}



        </div>
        <LabelledInput id="1" label="Username" placeholder="divyansh@gmail.com" onchange={(e) => {
            setPostInputs({
                ...postInputs,
                username: e.target.value
            })
        }} />
        <LabelledInput id="2" label="Password" type="password" placeholder="password" onchange={(e) => {
            setPostInputs({
                ...postInputs,
                password: e.target.value
            })
        }} />
        {type === "signup"?  <LabelledInput id="3" label="Name"  placeholder="your good name" onchange={(e) => {
            setPostInputs({
                ...postInputs,
                name : e.target.value
            })
        }} /> : null}

        <button onClick={Signuprequest}
              type="submit"
              className="w-auto px-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition mt-4">
              {type === "signup" ? "Sign Up" : "Sign In"}
        </button>
    </div>
}
interface LabelledInputProps {
    label: string;
    placeholder: string;
    onchange: (e: ChangeEvent<HTMLInputElement>) => void;
    type? :  string; 
    id : string;
}
function LabelledInput({label, placeholder, onchange, type , id}: LabelledInputProps)  {
    return <div>
        <label  className="block text-m font-bold">{label}</label>
        <input
            type = {type || "text"}
            id={id}
            placeholder={placeholder}
            className="mt-1 w-full md:w-80 lg:w-96 border border-gray-700 rounded-lg p-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            onChange={onchange}
        />

    </div>
}