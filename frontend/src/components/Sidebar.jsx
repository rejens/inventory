import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
   return (
      <div>
         <ul>
            <li>
               <NavLink
                  to="/"
                  activeClassName="active"
                  className="py-2 px-5 text-xl text-gray-900 border-b-[1px] border-gray-200 block text-[#334155]"
               >
                  Dashboard
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/inventory"
                  activeClassName="active"
                  className="py-2 px-5 text-xl text-gray-900 border-b-[1px] border-gray-200 block text-[#334155]"
               >
                  Inventory
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/purchases"
                  activeClassName="active"
                  className="py-2 px-5 text-xl text-gray-900 border-b-[1px] border-gray-200 block text-[#334155]"
               >
                  Purchases
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/sales"
                  activeClassName="active"
                  className="py-2 px-5 text-xl text-gray-900 border-b-[1px] border-gray-200 block text-[#334155]"
               >
                  Sales
               </NavLink>
            </li>
         </ul>
      </div>
   );
}
