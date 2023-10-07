import { useContext } from "react";
import { useFormik } from "formik";
import InventoryContext from "../../context/InventoryContext";

export default function Add() {
   const { addProduct, addPurchase } = useContext(InventoryContext);

   const { values, handleChange, handleSubmit } = useFormik({
      initialValues: {
         name: "test",
         quantity: "10",
         price: "10",
         expiryDate: "2023-07-26",
         vendor: "rejens",
      },
      onSubmit: async (values) => {
         addProduct(values);
         addPurchase(values);
      },
   });

   return (
      <div className="w-1/2 mx-auto mt-10">
         <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full px-3">
                  <label
                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="name"
                  >
                     Product Name{" "}
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="name"
                     type="text"
                     placeholder="Rice"
                     value={values.name}
                     onChange={handleChange}
                  />
               </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="quantity"
                  >
                     Quantity
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                     id="quantity"
                     type="number"
                     placeholder=""
                     value={values.quantity}
                     onChange={handleChange}
                  />
               </div>
               <div className="w-full md:w-1/2 px-3">
                  <label
                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="price"
                  >
                     Price{" "}
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="price"
                     type="number"
                     placeholder=""
                     value={values.price}
                     onChange={handleChange}
                  />
               </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="expiryDate"
                  >
                     Expiry Date
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                     id="expiryDate"
                     type="date"
                     placeholder=""
                     value={values.expiryDate}
                     onChange={handleChange}
                  />
               </div>
               <div className="w-full md:w-1/2 px-3">
                  <label
                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="vendor"
                  >
                     Vendor{" "}
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="vendor"
                     type="text"
                     placeholder=""
                     value={values.vendor}
                     onChange={handleChange}
                  />
               </div>
            </div>

            <div className="md:flex md:items-center">
               <div className="md:w-1/3"></div>
               <div className="md:w-2/3">
                  <button
                     className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                     type="submit"
                     onClick={handleSubmit}
                  >
                     Submit
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
}
