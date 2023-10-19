import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function CartItems() {
   const { cart } = useContext(CartContext);
   return (
      <div>
         <ul>
            {cart?.map((item) => (
               <li className="my-3 flex justify-around " key={item.name}>
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
