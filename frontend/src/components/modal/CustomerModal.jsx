import { useContext } from "react";
import CartContext from "../context/CartContext";

export function showCustomerModal() {
   document.querySelector(`#my_modal_customer`).showModal();
}

export default function CustomerModal() {
   const { addCustomerName } = useContext(CartContext);
   //

   function handleCustomerNameSubmition() {
      const customerName = document.querySelector(`#customerName`).value;
      document.querySelector(`#customerName`).value = "";
      document.querySelector(`#my_modal_customer`).close();

      addCustomerName(customerName);
   }
   //
   return (
      <div>
         <dialog id={`my_modal_customer`} className="modal">
            <div className="w-full">
               <form
                  method="dialog"
                  className="modal-box min-w-[500px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
               >
                  <div className="mb-4">
                     <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="quantity"
                     >
                        Customer Name
                     </label>
                     <input
                        className={` shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        id="customerName"
                        type="text"
                        placeholder="Customer Name"
                     />
                  </div>

                  <div className="flex items-center justify-center">
                     <button
                        className={` bg-blue-400 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline `}
                        type="button"
                        onClick={handleCustomerNameSubmition}
                     >
                        submit customer
                     </button>
                  </div>
               </form>
            </div>
         </dialog>
      </div>
   );
}
