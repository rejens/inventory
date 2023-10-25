import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";
import Toast from "../../shared/toast";

export default function Login() {
   const navigate = useNavigate();

   //managing states

   //for changing password visibility
   const [passwordVisible, setPasswordVisible] = useState(false);
   const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
   };

   //handle login
   const handleLogin = async () => {
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;

      const response = await fetch(
         `${process.env.REACT_APP_SERVER}/auth/login`,
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               email,
               password,
            }),
         }
      );

      if (response.status === 400) {
         Toast({
            type: "error",
            message: "email or password not correct",
         });
      }

      if (response.status === 200) {
         const { token } = await response.json();
         Cookies.set("token", token);
         window.location.replace("/");
      }
   };

   return (
      <div className="flex justify-center items-center h-screen bg-[#82bd61]">
         <div className="h-[350px] w-[500px]  bg-white p-4 rounded-md shadow-lg">
            <form
               action=""
               className="flex justify-center flex-col h-full mx-5"
            >
               <h1 className="text-center text-green-500 text-2xl">login</h1>

               {/* username input field */}
               <div className=" rounded-lg bg-slate-200 my-3 ">
                  <input
                     type="email"
                     className="bg-inherit w-full px-2 py-3 focus:outline-green-500 "
                     name=""
                     placeholder="Email"
                     id="email"
                  />
               </div>

               {/* password input field */}
               <div className="rounded-lg bg-slate-200 my-3 relative">
                  <input
                     type={passwordVisible ? "text" : "password"}
                     className="bg-inherit w-full px-2 py-3 focus:outline-green-500"
                     name=""
                     placeholder="Password"
                     id="password"
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
                     type="button"
                     className="text-white py-3 text-center w-full text-xl"
                     onClick={handleLogin}
                  >
                     login
                  </button>
               </div>

               <div className="text-center text-blue-600">
                  <Link to="/register"> Don't have an account? Register</Link>
               </div>
            </form>
         </div>
      </div>
   );
}
