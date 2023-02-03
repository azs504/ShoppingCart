import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

export function ShoppingCartList() {
  const { cartItems } = useShoppingCart();

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
}
