import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
   //managing states

   //for changing password visibility
   const [passwordVisible, setPasswordVisible] = useState(false);
   const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
   };

   return (
      <div className="h-[350px] w-[500px]  bg-white p-4 rounded-md shadow-lg">
         <form action="" className="flex justify-center flex-col h-full mx-5">
            <h1 className="text-center text-green-500 text-2xl">login</h1>

            {/* username input field */}
            <div className=" rounded-lg bg-slate-200 my-3 ">
               <input
                  type="text"
                  className="bg-inherit w-full px-2 py-3 focus:outline-green-500 "
                  name=""
                  placeholder="Username"
                  id=""
               />
            </div>

            {/* password input field */}
            <div className="rounded-lg bg-slate-200 my-3 relative">
               <input
                  type={passwordVisible ? "text" : "password"}
                  className="bg-inherit w-full px-2 py-3 focus:outline-green-500"
                  name=""
                  placeholder="Password"
                  id=""
               />
               {passwordVisible ? (
                  <button type="button" onClick={togglePasswordVisibility}>
                     <FaEyeSlash className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500" />
                  </button>
               ) : (
                  <button type="button" onClick={togglePasswordVisibility}>
                     <FaEye className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500" />
                  </button>
               )}
            </div>

            {/* login button */}
            <div className="  bg-green-500 my-2 ">
               <button
                  type="submit"
                  className="text-white py-3 text-center w-full text-xl"
               >
                  login
               </button>
            </div>
            <div></div>
         </form>
      </div>
   );
}
