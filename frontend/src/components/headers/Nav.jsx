import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

import { useState, useEffect } from "react";

import logo from "../../assets/images/logo.png";
import Notifications from "./Notifications";
import InventoryContext from "../context/InventoryContext";

const fetchExpiredProducts = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_SERVER}/products/expire`);
    const products = await res.json();
    return products;
  } catch (e) {
    console.log(e);
  }
};

export default function Nav() {
  const [expired, setExpired] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await fetchExpiredProducts();
      setExpired(products);
    })();
  }, []);

  const { changeDropdownState, showDropdown } = useContext(InventoryContext);
  return (
    <nav className="bg-[#9DB2BF] h-20 ">
      <div className="w-3/4 flex justify-between items-center mx-auto h-20">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="h-16 rounded-full " />
          </Link>
        </div>
        <div
          className="text-xl font-semibold  relative"
          onClick={changeDropdownState}
        >
          {/* <Link to="/inventory"> Inventory</Link> */}
          <div className="relative text-gray-100 hover:cursor-pointer hover:transition-all duration-100 hover:scale-105">
            <FaBell className="text-2xl" />
            <span className="badge badge-sm absolute -top-4 left-5 bg-slate-500 rounded-lg  text-sm px-2">
              {expired.length}
            </span>
          </div>
          <div
            className={` absolute -z-10  -right-20  ${
              showDropdown &&
              "z-10 top-12 -right-20   transition-all duration-100 scale-105"
            } bottom-0`}
          >
            <Notifications expired={expired} />
          </div>
        </div>
      </div>
    </nav>
  );
}
