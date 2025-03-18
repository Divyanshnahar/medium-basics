import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                <div>
                    <Auth type="signin" />
                </div>
                <div className="bg-gray-100 flex justify-center items-center invisible md:visible">
                    <Quote />
                </div>
            </div>
}