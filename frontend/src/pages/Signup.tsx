
import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";

export const Signup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
     
      <div>
        <Auth type="signup" />
      </div>
      <div className="bg-gray-100 flex justify-center items-center invisible md:visible">
        <Quote />
      </div>
    </div>
  );
};
