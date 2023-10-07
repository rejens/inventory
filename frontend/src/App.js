import "./App.css";
import Nav from "./components/headers/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NotFound from "./components/PageNotFound";
import Dashboard from "./components/pages/Dashboard";
import Sidebar from "./components/Sidebar";

import Inventory from "./components/pages/Inventory";
import Purchases from "./components/pages/Purchases";
import Sales from "./components/pages/Sales";
import EditProduct from "./components/pages/edit/EditProduct";
import CartSidebar from "./components/cart/CartSidebar";

import { InventoryContextProvider } from "./components/context/InventoryContext";
import { CartContextProvider } from "./components/context/CartContext";

import Add from "./components/pages/add/Add";

function App() {
  return (
    <div className="App">
      <Router>
        <InventoryContextProvider>
          <CartContextProvider>
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
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </CartContextProvider>
        </InventoryContextProvider>
      </Router>
    </div>
  );
}

export default App;
