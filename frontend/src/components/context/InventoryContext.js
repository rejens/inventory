import React from "react";
import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";
import { useNavigate } from "react-router-dom";

import mergeSort from "../../algorithms/mergeSort";

import Toast from "../shared/toast";

const InventoryContext = createContext();

function InventoryContextProvider({ children }) {
   const [state, dispatch] = useReducer(Reducer, {
      products: [],
      purchase: [],
      sales: [],
      showDropdown: false,
      token: document.cookie
         .split("; ")
         .find((row) => row.startsWith("token="))
         ?.split("=")[1],
   });

   const navigate = useNavigate();

   //products / add, update, delete, fetch

   const fetchProductById = async (id) => {
      try {
         const response = await fetch(
            `${process.env.REACT_APP_SERVER}/products/${id}`,
            {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  authorization: `${state.token}`,
               },
            }
         );
         if (response.status === 200) {
            const data = await response.json();
            return data;
         }
      } catch (error) {
         console.log(error);
      }
   };

   const fetchAllProducts = async () => {
      try {
         const response = await fetch(
            `${process.env.REACT_APP_SERVER}/products`,
            {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  authorization: `${state.token}`,
               },
            }
         );
         if (response.status === 200) {
            const data = mergeSort(await response.json());

            dispatch({
               type: "FETCH_ALL_PRODUCTS",
               payload: data,
            });
         }
      } catch (error) {
         console.log(error);
      }
   };

   const deleteProduct = async (id) => {
      try {
         const response = await fetch(
            `${process.env.REACT_APP_SERVER}/products/${id}`,
            {
               method: "DELETE",
               headers: {
                  "Content-Type": "application/json",
                  authorization: `${state.token}`,
               },
            }
         );
         if (response.status === 201) {
            const data = await response.json();
            dispatch({
               type: "DELETE_PRODUCT",
               payload: id,
            });
            Toast({ type: "success", message: "product deleted successfully" });
         }
      } catch (error) {
         console.log(error);
      }
   };

   const addProduct = async (product) => {
      try {
         const response = await fetch(
            `${process.env.REACT_APP_SERVER}/products`,
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  authorization: `${state.token}`,
               },
               body: JSON.stringify(product),
            }
         );
         if (response.status === 201) {
            const data = await response.json();
            dispatch({
               type: "ADD_PRODUCT",
               payload: data,
            });
            navigate("/inventory");
         }
      } catch (error) {
         console.log(error);
      }
   };

   const updateProduct = async (product) => {
      try {
         const response = await fetch(
            `${process.env.REACT_APP_SERVER}/products/${product._id}`,
            {
               method: "PUT",
               headers: {
                  "Content-Type": "application/json",
                  authorization: `${state.token}`,
               },
               body: JSON.stringify(product),
            }
         );
         if (response.status === 201) {
            const data = await response.json();
            dispatch({
               type: "UPDATE_PRODUCT",
               payload: data,
            });
         }
      } catch (error) {
         console.log(error);
      }
   };

   const sellProduct = async (product) => {
      try {
         let updatedProduct = { quantity: product.leftQuantity };
         const response = await fetch(
            `${process.env.REACT_APP_SERVER}/products/${product._id}`,
            {
               method: "PUT",
               headers: {
                  "Content-Type": "application/json",
                  authorization: `${state.token}`,
               },
               body: JSON.stringify(updatedProduct),
            }
         );
         if (response.status === 201) {
            const data = await response.json();
            dispatch({
               type: "SELL_PRODUCT",
               payload: data,
            });
         }
      } catch (error) {
         console.log(error);
      }
   };

   const editProduct = async (product) => {
      try {
         // console.log(product.id);
         const response = await fetch(
            `${process.env.REACT_APP_SERVER}/products/${product._id}`,
            {
               method: "PUT",
               headers: {
                  "Content-Type": "application/json",
                  authorization: `${state.token}`,
               },
               body: JSON.stringify(product),
            }
         );
         if (response.status === 201) {
            await fetchAllProducts();

            const data = await response.json();
            dispatch({
               type: "SELL_PRODUCT",
               payload: data,
            });
         }
      } catch (err) {
         console.log(err);
      }
   };

   //purchases
   const fetchAllPurchases = async () => {
      try {
         const response = await fetch(
            `${process.env.REACT_APP_SERVER}/purchased`,
            {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  authorization: `${state.token}`,
               },
            }
         );
         if (response.status === 200) {
            const data = await response.json();
            dispatch({
               type: "FETCH_ALL_PURCHASE",
               payload: data,
            });
         }
      } catch (error) {
         console.log(error);
      }
   };

   const addPurchase = async (purchase) => {
      try {
         const response = await fetch(
            `${process.env.REACT_APP_SERVER}/purchased`,
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  authorization: `${state.token}`,
               },
               body: JSON.stringify(purchase),
            }
         );
         if (response.status === 201) {
            const data = await response.json();
            dispatch({
               type: "ADD_PURCHASE",
               payload: data,
            });
         }
      } catch (error) {
         console.log(error);
      }
   };

   //sales
   const fetchAllSales = async () => {
      try {
         const response = await fetch(`${process.env.REACT_APP_SERVER}/sales`, {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
               authorization: `${state.token}`,
            },
         });
         if (response.status === 200) {
            const data = await response.json();
            dispatch({
               type: "FETCH_ALL_SALES",
               payload: data,
            });
         }
      } catch (error) {
         console.log(error);
      }
   };

   const addSales = async (product, quantity, customerName) => {
      try {
         const response = await fetch(`${process.env.REACT_APP_SERVER}/sales`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               authorization: `${state.token}`,
            },
            body: JSON.stringify({ product, quantity, customerName }),
         });
         if (response.status === 201) {
            const data = await response.json();
            dispatch({
               type: "ADD_SALES",
               payload: data,
            });
         }
      } catch (error) {
         console.log(error);
      }
   };

   //dropdown
   const changeDropdownState = async () => {
      try {
         dispatch({
            type: "CHANGE_DROPDOWN_STATE",
            payload: !state.showDropdown,
         });
         console.log(!state.showDropdown);
      } catch (e) {
         console.log(e);
      }
   };

   // navigation part
   const fetchExpiredProducts = async () => {
      try {
         const res = await fetch(
            `${process.env.REACT_APP_SERVER}/products/expire`,
            {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  authorization: `${state.token}`,
               },
            }
         );
         const products = await res.json();
         return products;
      } catch (e) {
         console.log(e);
      }
   };

   //fetches low inventory products from the backend
   const fetchLowInventoryProducts = async () => {
      try {
         const res = await fetch(
            `${process.env.REACT_APP_SERVER}/products/lowInventory`,
            {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  authorization: `${state.token}`,
               },
            }
         );
         const products = await res.json();
         return products;
      } catch (e) {
         console.log(e);
      }
   };

   useEffect(() => {
      fetchAllProducts();

      fetchAllPurchases();
      fetchAllSales();
   }, []);

   return (
      <InventoryContext.Provider
         value={{
            ...state,
            fetchProductById,
            fetchAllProducts,
            deleteProduct,
            addProduct,
            updateProduct,
            fetchAllPurchases,
            addPurchase,
            fetchAllSales,
            addSales,
            sellProduct,
            editProduct,
            changeDropdownState,
            fetchLowInventoryProducts,
            fetchExpiredProducts,
         }}
      >
         {children}
      </InventoryContext.Provider>
   );
}

export default InventoryContext;
export { InventoryContextProvider };
