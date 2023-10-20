import React from "react";
import {
   BrowserRouter as Router,
   Route,
   Routes,
   useLocation,
} from "react-router-dom";

//pages import
import NotFound from "../PageNotFound";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";
import EditProduct from "../pages/edit/EditProduct";
import Add from "../pages/add/Add";
import Login from "../pages/authentication/Login";
import Regiser from "../pages/authentication/Register";

//layout components import
import CartSidebar from "../cart/CartSidebar";
import Nav from "../headers/Nav";
import Sidebar from "./Sidebar";

export default function RouterPage() {
   const location = useLocation();

   console.log("location", location);

   return (
      <>
         <CartSidebar />
         <Nav />
         <div className="flex ">
            <div className=" w-1/6 bg-[#F5F5F5] min-h-[90vh]">
               <Sidebar />
            </div>
            <div className=" w-5/6">
               <Routes>
                  <Route path="/" exact element={<Dashboard />} />

                  <Route path="/inventory" exact element={<Inventory />} />
                  <Route path="/inventory/add" exact element={<Add />} />
                  <Route
                     path="inventory/edit/:id"
                     exact
                     element={<EditProduct />}
                  />
                  <Route path="/sales" exact element={<Sales />} />

                  <Route path="/purchases" exact element={<Purchases />} />

                  <Route path="/*" elemexnt={<NotFound />} />
               </Routes>
            </div>
         </div>
      </>
   );
}
