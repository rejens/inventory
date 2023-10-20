import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ToastContainer from "./components/shared/ToastContainer";

import { InventoryContextProvider } from "./components/context/InventoryContext";
import { CartContextProvider } from "./components/context/CartContext";

import RouterPage from "./components/layout/RouterPage";

export default function App() {
   return (
      <div className="App">
         <Router>
            <ToastContainer />
            <InventoryContextProvider>
               <CartContextProvider>
                  <RouterPage />
               </CartContextProvider>
            </InventoryContextProvider>
         </Router>
      </div>
   );
}
