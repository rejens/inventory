import { useState } from "react";

export default function Search({ setSearch }) {
   const [searchKey, setSearchKey] = useState("");

   const handleSearch = (e) => {
      setSearch(searchKey);
   };

   return (
      <div>
         <input
            type="text"
            className="focus:outline-blue-500  border-2 border-[#334155] rounded-md px-2 py-1 w-[500px]"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
         />
         <button
            className="bg-green-300 px-2 py-1  rounded-md"
            onClick={handleSearch}
         >
            search
         </button>
      </div>
   );
}
