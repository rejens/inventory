import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import InventoryContext from "../context/InventoryContext";
import CartContext from "../context/CartContext";

import SellProduct from "../modal/SellProduct";
import CustomerModal from "../modal/CustomerModal";

import Search from "../inventory/Search";

// import fibonacciSearch from "../../algorithms/fibonacciSearch";
import binarySearch from "../../algorithms/binarySearch";

import { FaEdit, FaTrash, FaCartArrowDown } from "react-icons/fa";

export default function Inventory() {
   const { products: rawProducts, deleteProduct } =
      useContext(InventoryContext);
   const { changeCartState } = useContext(CartContext);

   const [search, setSearch] = useState("");
   const [products, setProducts] = useState();
   console.log("raw products", products);

   useEffect(() => {
      setProducts(rawProducts);
   }, [rawProducts]);

   useEffect(() => {
      if (search.length > 0) setProducts([binarySearch(rawProducts, search)]);
      else if (search.length == 0) {
         setProducts(rawProducts);
      }
   }, [search]);

   return (
      <div>
         <CustomerModal />
         <div className="flex justify-end mx-5">
            <div className="relative right-1/4">
               <Search setSearch={setSearch} />
            </div>
            <Link
               to={"/inventory/add"}
               className="bg-[#94a3b8] px-4 py-2 rounded-sm text-white"
            >
               add
            </Link>
         </div>
         <table className="w-full table-fixed">
            <thead className="bg-slate-700 text-white h-16 text-xl">
               <tr>
                  <th className="font-medium">sn</th>
                  <th className="font-medium">name</th>
                  <th className="font-medium">quantity</th>
                  <th className="font-medium">cost price</th>
                  <th className="font-medium">selling price</th>
                  <th className="font-medium">action</th>
               </tr>
            </thead>
            <tbody className="text-md">
               {products?.map((product, index) => {
                  return (
                     <tr
                        key={product._id}
                        className="odd:bg-gray-200 even:bg-gray-300"
                     >
                        <td className="text-center py-3">{index + 1}</td>
                        <td className="text-center py-3">{product.name}</td>
                        <td className="text-center py-3">{product.quantity}</td>
                        <td className="text-center py-3">
                           {product.costPrice}
                        </td>
                        <td className="text-center py-3">
                           {product.sellingPrice}
                        </td>

                        <td className="text-center py-3">
                           <div className="flex justify-center gap-2">
                              <Link to={`/inventory/edit/${product._id}`}>
                                 <FaEdit className="text-blue-500 transition-all duration-150 hover:scale-125" />
                              </Link>
                              <SellProduct product={product} />
                              <FaTrash
                                 className="text-red-500 hover:cursor-pointer transition-all duration-150 hover:scale-125"
                                 onClick={() => {
                                    window.confirm(
                                       "Are you sure you want to delete this product?"
                                    ) && deleteProduct(product._id);
                                 }}
                              />
                           </div>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
         <button
            className="absolute bottom-5 right-10 "
            onClick={changeCartState}
         >
            <FaCartArrowDown className="text-green-500 text-4xl transition-all duration-150 hover:scale-125" />
         </button>
      </div>
   );
}
