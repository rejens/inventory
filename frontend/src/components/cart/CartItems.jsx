import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function CartItems() {
   const { cart, removeItemFromCart } = useContext(CartContext);
   return (
      <div>
         <ul>
            {cart?.map((item) => (
               <li className="flex justify-around my-5 " key={item.name}>
                  <button
                     onClick={() => {
                        removeItemFromCart(item);
                     }}
                  >
                     ✕
                  </button>
                  <div>{item.name}</div>
                  <div>
                     ({item.sellingPrice} * {item.quantity}) Rs.{" "}
                     {item.sellingPrice * item.quantity}{" "}
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}
