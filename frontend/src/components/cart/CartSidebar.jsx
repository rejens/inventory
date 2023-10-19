import { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";

import CartItems from "./CartItems";

import InventoryContext from "../context/InventoryContext";
import { showCustomerModal } from "../modal/CustomerModal";
import { set } from "mongoose";

export default function CartSidebar() {
   //context are initialized here
   const {
      hideRightSidebar,
      changeCartState,
      cart,
      checkoutCart,
      customerName,
   } = useContext(CartContext);
   const { addSales, sellProduct } = useContext(InventoryContext);

   //state variables are initialized here
   const [checkoutClick, setCheckoutClick] = useState(false);

   const checkoutItems = () => {
      showCustomerModal();
      setCheckoutClick(true);
   };

   useEffect(() => {
      if (customerName && checkoutClick) {
         cart?.forEach((item) => {
            addSales(item, +item.quantity, customerName);
            sellProduct(item);
         });
         checkoutCart();
      }
   }, [customerName, checkoutClick]);

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
               ✕
            </span>

            {/* cart items components */}
            <div className="relative top-24">
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
