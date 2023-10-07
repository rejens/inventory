import React from "react";
import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const CartContext = createContext();

function CartContextProvider({ children, session }) {
   const initialValues = {
      hideRightSidebar: true,
      cart: [],
      hideDropdown: true,
      sidebarType: null,
      registered: null,
   };

   //for managing global state
   const [state, dispatch] = useReducer(Reducer, initialValues);

   //for managing cart state
   const changeCartState = () => {
      try {
         dispatch({
            type: "CHANGE_CART_STATE",
            payload: { hideRightSidebar: !state.hideRightSidebar },
         });
      } catch (error) {
         console.log(error);
      }
   };

   //add item to cart
   const addItemToCart = async (item, quantity = 1, leftQuantity) => {
      try {
         let cart = state.cart;

         if (!cart.filter((cartItem) => cartItem._id === item._id).length > 0) {
            cart.push({ ...item, quantity, leftQuantity });
            dispatch({ type: "MANAGE_CART", payload: cart });
         }
      } catch (error) {
         console.log(error);
      }
   };

   //checkout cart
   const checkoutCart = async () => {
      try {
         dispatch({ type: "MANAGE_CART", payload: [] });
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <CartContext.Provider
         value={{
            ...state,
            changeCartState,
            addItemToCart,
            checkoutCart,
         }}
      >
         {children}
      </CartContext.Provider>
   );
}

export default CartContext;
export { CartContextProvider };
