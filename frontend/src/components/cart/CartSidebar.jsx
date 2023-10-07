import { useContext } from "react";
import CartContext from "../context/CartContext";

import CartItems from "./CartItems";

import InventoryContext from "../context/InventoryContext";

export default function CartSidebar() {
   const { hideRightSidebar, changeCartState, cart, checkoutCart } =
      useContext(CartContext);
   const { addSales, sellProduct } = useContext(InventoryContext);

   const checkoutItems = () => {
      cart?.forEach((item) => {
         addSales(item, +item.quantity);
         sellProduct(item);
      });

      checkoutCart();
   };

   return (
      <div
         className={`absolute w-full h-full bg-[rgba(0,0,0,0.5)] flex z-10 ${
            hideRightSidebar && "hidden"
         }`}
      >
         <div className="w-3/4" onClick={changeCartState}></div>
         <div className="w-1/4 bg-white">
            <span
               className="text-2xl absolute right-10 top-5 hover:cursor-pointer"
               onClick={changeCartState}
            >
               X
            </span>

            <div className="relative top-24 left-9">
               <CartItems />
            </div>
            <button
               className="absolute right-10 bottom-10"
               onClick={checkoutItems}
            >
               checkout
            </button>
         </div>
      </div>
   );
}
