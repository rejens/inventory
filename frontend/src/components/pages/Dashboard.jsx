import React from "react";
import Pie from "../charts/Pie.jsx";
import Area from "../charts/Area.jsx";

export default function Dashboard() {
   return (
      <div className="flex mt-10">
         <div className="w-1/3">
            <Pie />
         </div>
         <div className="w-2/3">
            <Area />
         </div>
      </div>
   );
}
