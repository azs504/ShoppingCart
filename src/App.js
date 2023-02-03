import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { Menu } from "./page/Menu";
import { Shopping } from "./page/Shopping";
import { StoreInformation } from "./page/StoreInformation";
import { ShoppingCartList } from "./page/ShoppingCartList";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import NavbarLayout from "./navbar";

function App() {
  return (
    <ShoppingCartProvider>
      <Index />
    </ShoppingCartProvider>
  );
}

export default App;

const Index = () => {
  return (
    <div className=" bg-yellow-200 h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <NavbarLayout>
              <HomePage />
            </NavbarLayout>
          }
        />
        <Route
          path="/StoreInformation"
          element={
            <NavbarLayout>
              <StoreInformation />
            </NavbarLayout>
          }
        />
        <Route
          path="/Menu"
          element={
            <NavbarLayout>
              <Menu />
            </NavbarLayout>
          }
        />
        <Route
          path="/Shopping"
          element={
            <NavbarLayout>
              <Shopping />
            </NavbarLayout>
          }
        />
        <Route
          path="/ShoppingCartList"
          element={
            <NavbarLayout>
              <ShoppingCartList />
            </NavbarLayout>
          }
        />
      </Routes>
    </div>
  );
};
