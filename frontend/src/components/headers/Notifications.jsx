export default function Notifications({ expired, lowInventory }) {
   return (
      <div className="min-h-[100px] w-60 bg-slate-200 rounded-md">
         <ul className="px-2 text-lg">
            {expired.map((item) => (
               <li className="font-normal text-gray-700" key={item.name}>
                  {" "}
                  {item.name} about to expire
               </li>
            ))}

            {lowInventory.map((item) => (
               <li className="font-normal text-gray-700" key={item.name}>
                  {" "}
                  {item.name} about to finish
               </li>
            ))}
         </ul>
      </div>
   );
}
