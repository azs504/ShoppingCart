import React from "react";
import { useShoppingCart } from "src/context/ShoppingCartContext";
import { getAllProduct } from "src/data/product";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFormQuantity } = useShoppingCart();
  const getProductInformation = getAllProduct()?.find((item) => item.id === id);
  const p = getProductInformation?.price;
  const q = quantity;

  return (
    <div className=" flex justify-between m-3">
      <div className=" flex h-[100px]">
        <div className=" flex w-52 bg-white/30 p-2">
          <img src={getProductInformation?.imgUrl} />
        </div>
        <div className=" my-auto">
          <div>
            {getProductInformation?.name}
            {quantity > 1 && (
              <span className=" text-sm text-black/40">x{quantity}</span>
            )}
          </div>
          <div>
            <h1 className=" text-sm text-black/40">{`NT$${getProductInformation?.price}`}</h1>
          </div>
        </div>
      </div>
      <div className=" my-auto">
        <button
          onClick={() => removeFormQuantity(id)}
          className=" w-10 h-10 text-xl text-rose-500 border-2 border-rose-500 rounded"
        >
          x
        </button>
      </div>
    </div>
  );
}
