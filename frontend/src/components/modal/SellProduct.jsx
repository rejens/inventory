import { useState, useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import InventoryContext from "../context/InventoryContext";
import CartContext from "../context/CartContext";

export default function SaleProduct({ product }) {
   const [valError, setValError] = useState(false);
   const [quantity, setQuantity] = useState(0);

   const { addSales, sellProduct } = useContext(InventoryContext);
   const { addItemToCart } = useContext(CartContext);

   const modalShow = () => {
      document.querySelector(`#my_modal_${product._id}`).showModal();
   };

   const checkQuantity = (e) => {
      const inputQuantity = e.target.value;
      setQuantity(inputQuantity);
      inputQuantity > product.quantity ? setValError(true) : setValError(false);
   };

   const addToCart = () => {
      if (quantity > 0 && !valError) {
         const leftQuantity = product.quantity - quantity;
         addItemToCart(product, quantity, leftQuantity);
         document.querySelector(`#my_modal_${product._id} #quantity`).value =
            "";
         document.querySelector(`#my_modal_${product._id}`).close();
      }
   };

   return (
      <div>
         <FaCartPlus
            className="text-green-500 hover:cursor-pointer transition-all duration-150 hover:scale-125"
            onClick={modalShow}
         />
         <dialog id={`my_modal_${product._id}`} className="modal">
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
                        Quantity
                     </label>
                     <input
                        className={`${
                           valError && "border-red-500"
                        } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        id="quantity"
                        type="text"
                        placeholder="Quantity"
                        onChange={checkQuantity}
                     />
                  </div>

                  <div className="flex items-center justify-center">
                     <button
                        className={` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                           valError
                              ? "bg-gray-500 hover:bg-gray-700"
                              : "bg-blue-500 hover:bg-blue-700"
                        }`}
                        type="button"
                        onClick={() => {
                           addToCart(product);
                        }}
                     >
                        add to cart
                     </button>
                  </div>
               </form>
            </div>
         </dialog>
      </div>
   );
}
