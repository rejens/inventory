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
import Cookies from "js-cookie";

export default function RouterPage() {
   const location = useLocation();

   const token = Cookies.get("token");

   if (
      token &&
      (location.pathname === "/login" || location.pathname === "/register")
   ) {
      window.location.href = "/";
   }

   return (
      <>
         {location.pathname === "/login" || location.pathname === "/register"
            ? !token && (
                 <Routes>
                    <Route
                       path="/login"
                       exact
                       element={
                          <div className="flex justify-center items-center h-screen bg-[#82bd61]">
                             <Login />
                          </div>
                       }
                    />
                    <Route
                       path="/register"
                       exact
                       element={
                          <div className="flex justify-center items-center h-screen">
                             <Regiser />
                          </div>
                       }
                    />
                 </Routes>
              )
            : token && (
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

                             <Route
                                path="/inventory"
                                exact
                                element={<Inventory />}
                             />
                             <Route
                                path="/inventory/add"
                                exact
                                element={<Add />}
                             />
                             <Route
                                path="inventory/edit/:id"
                                exact
                                element={<EditProduct />}
                             />
                             <Route path="/sales" exact element={<Sales />} />

                             <Route
                                path="/purchases"
                                exact
                                element={<Purchases />}
                             />

                             <Route path="/*" elemexnt={<NotFound />} />
                          </Routes>
                       </div>
                    </div>
                 </>
              )}
      </>
   );
}
