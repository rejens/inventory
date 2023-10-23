import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
   const location = useLocation();

   const [activePath, setActivePath] = useState("");

   useEffect(() => {
      setActivePath(location.pathname.split("/")[1]);
   }, [location]);

   return (
      <div>
         <ul>
            <li>
               <NavLink
                  to="/"
                  className={`${
                     activePath === "" && "text-white"
                  } py-2 px-5 text-xl text-slate-700 border-b-[1px] border-gray-200 block`}
               >
                  Dashboard
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/inventory"
                  className={`${
                     activePath === "inventory" && "text-white"
                  } py-2 px-5 text-xl text-slate-700 border-b-[1px] border-gray-200 block`}
               >
                  {" "}
                  Inventory
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/purchases"
                  className={`${
                     activePath === "purchases" && "text-white"
                  } py-2 px-5 text-xl text-slate-700 border-b-[1px] border-gray-200 block`}
               >
                  Purchases
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/sales"
                  className={`${
                     activePath === "sales" && "text-white"
                  } py-2 px-5 text-xl text-slate-700 border-b-[1px] border-gray-200 block`}
               >
                  Sales
               </NavLink>
            </li>
         </ul>
      </div>
   );
}
