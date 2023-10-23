import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import Cookies from "js-cookie";

import logo from "../../assets/images/logo.png";
import Notifications from "./Notifications";
import InventoryContext from "../context/InventoryContext";

// fetches about to expire product(1 month remaning products) from the backend

//logout function
const logout = (navigate) => {
   Cookies.set("token", "");
   window.location.replace("/login");
};
export default function Nav() {
   const navigate = useNavigate();

   const [expired, setExpired] = useState([]);
   const [lowInventory, setLowInventory] = useState([]);

   useEffect(() => {
      (async () => {
         const products = await fetchExpiredProducts();
         setExpired(products);
         const lowInventoryProducts = await fetchLowInventoryProducts();
         setLowInventory(lowInventoryProducts);
      })();
   }, []);

   const {
      changeDropdownState,
      showDropdown,
      fetchExpiredProducts,
      fetchLowInventoryProducts,
   } = useContext(InventoryContext);
   return (
      <nav className="bg-[#9DB2BF] h-20 ">
         <div className="w-3/4 flex justify-between items-center mx-auto h-20">
            <div>
               <Link to={"/"}>
                  <img src={logo} alt="logo" className="h-16 rounded-full " />
               </Link>
            </div>
            <div className="text-xl font-semibold relative flex gap-8 items-center">
               {/* <Link to="/inventory"> Inventory</Link> */}
               <div
                  className="relative text-gray-100 hover:cursor-pointer hover:transition-all duration-100 hover:scale-105"
                  onClick={changeDropdownState}
               >
                  <FaBell className="text-2xl" />
                  <span className="badge badge-sm absolute -top-4 left-5 bg-slate-500 rounded-lg  text-sm px-2">
                     {expired.length + lowInventory.length}
                  </span>
               </div>
               <div
                  className={` absolute -z-10  -right-20  ${
                     showDropdown &&
                     "z-10 top-12 -right-20   transition-all duration-100 scale-105"
                  } bottom-0`}
               >
                  <Notifications
                     expired={expired}
                     lowInventory={lowInventory}
                  />
               </div>
               <button
                  className="bg-red-500 rounded-sm px-3 py-1 text-slate-200"
                  onClick={() => {
                     logout(navigate);
                  }}
               >
                  logout
               </button>
            </div>
         </div>
      </nav>
   );
}
