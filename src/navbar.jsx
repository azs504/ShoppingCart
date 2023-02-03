import "./App.css";
import { ReactComponent as LeeLoge } from "./svg/Logo.svg";
import { ReactComponent as ShoppingCart } from "./svg/shoppingCart.svg";

import { useShoppingCart } from "./context/ShoppingCartContext";
import { Link } from "react-router-dom";

const NavbarLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default NavbarLayout;

const Navbar = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <>
      <div className=" flex justify-between">
        <button>
          <Link to="/">
            <LeeLoge className=" ml-2" />
          </Link>
        </button>
        <div className=" flex">
          {/* <div className=" mr-3 mt-2 flex h-20 w-56 bg-yellow-100 rounded-lg shadow-lg">
            <Login className=" pt-3 pl-2" />
            <div className=" pt-3 pl-3">
              <h1 className=" font-mono font-semibold">Login</h1>
              <h1 className=" font-mono text-sm">or Sign in</h1>
            </div>
            <LoginArrow className=" pt-3 pl-2" />
          </div> */}
          <button className=" mt-3 mr-2 relative">
            <Link to="/ShoppingCartList">
              <ShoppingCart />
            </Link>
            <div className=" rounded-full bg-red-600 w-6  text-white absolute bottom-0 right-0">
              {cartQuantity}
            </div>
          </button>
        </div>
      </div>
      <div className=" mt-5 ml-3 mr-3 mb-4 border-y-4 border-y-orange-500 font-semibold text-lg flex justify-between">
        <button className=" hover:text-slate-500">
          <Link to="/">首頁</Link>
        </button>
        <button className=" hover:text-slate-500">
          <Link to="/StoreInformation">門市</Link>
        </button>
        <button className=" hover:text-slate-500">
          <Link to="/Menu">內用菜單</Link>
        </button>
        <button className=" hover:text-slate-500">
          <Link to="/Shopping">購物</Link>
        </button>
      </div>
    </>
  );
};
