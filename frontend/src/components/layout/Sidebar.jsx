import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
   return (
      <div>
         <ul>
            <li>
               <NavLink
                  to="/"
                  className="py-2 px-5 text-xl text-slate-700 border-b-[1px] border-gray-200 block "
               >
                  Dashboard
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/inventory"
                  className="py-2 px-5 text-xl text-slate-700 border-b-[1px] border-gray-200 block "
               >
                  Inventory
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/purchases"
                  className="py-2 px-5 text-xl text-slate-700 border-b-[1px] border-gray-200 block "
               >
                  Purchases
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/sales"
                  className="py-2 px-5 text-xl text-slate-700 border-b-[1px] border-gray-200 block "
               >
                  Sales
               </NavLink>
            </li>
         </ul>
      </div>
   );
}
