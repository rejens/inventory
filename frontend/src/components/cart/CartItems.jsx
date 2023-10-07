import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function CartItems() {
   const { cart } = useContext(CartContext);
   return (
      <div>
         <ul>
            {cart?.map((item) => (
               <>
                  <li className="my-3 flex justify-around " key={item.name}>
                     <div>{item.name}</div>
                     <div>
                        ({item.price} * {item.quantity}) Rs.{" "}
                        {item.price * item.quantity}{" "}
                     </div>
                  </li>
                  <hr />
               </>
            ))}
         </ul>
      </div>
   );
}
