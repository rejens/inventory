export default function Notifications({ expired }) {
   return (
      <div className="min-h-[100px] w-60 bg-slate-200 rounded-md">
         <ul className="px-2 text-lg">
            {expired.map((item) => (
               <li className="font-normal text-gray-700" key={item.name}>
                  {" "}
                  {item.name} about to expire
               </li>
            ))}
         </ul>
      </div>
   );
}
