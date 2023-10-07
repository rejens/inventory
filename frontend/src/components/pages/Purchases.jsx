import { useContext } from "react";

import InventoryContext from "../context/InventoryContext";

export default function Purchases() {
   const { purchase } = useContext(InventoryContext);
   return (
      <div>
         <table className="w-full table-fixed">
            <thead className="bg-slate-700 text-white h-16 text-xl">
               <tr>
                  <th className="font-medium">sn</th>
                  <th className="font-medium">name</th>
                  <th className="font-medium">quantity</th>
                  <th className="font-medium">price</th>
                  <th className="font-medium">vendor</th>
               </tr>
            </thead>
            <tbody className="text-md">
               {purchase.map((product, index) => {
                  return (
                     <tr
                        key={product._id}
                        className="odd:bg-gray-200 even:bg-gray-300"
                     >
                        <td className="text-center py-3">{index + 1}</td>
                        <td className="text-center py-3">{product.name}</td>
                        <td className="text-center py-3">{product.quantity}</td>
                        <td className="text-center py-3">{product.price}</td>
                        <td className="text-center py-3">{product.vendor}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}
