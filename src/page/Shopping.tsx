import { useShoppingCart } from "../context/ShoppingCartContext";
import { getAllProduct } from "../data/product";
import React from "react";

export function Shopping() {
  const products = getAllProduct();

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFormQuantity,
  } = useShoppingCart();

  return (
    <div className="p-4 grid gap-6 grid-cols-2 bg-yellow-200">
      {products.map((product) => (
        <div
          key={product.id}
          className=" border-4 border-lime-500 rounded-lg p-4"
        >
          <div className="flex h-[200px] bg-white/30 py-4">
            <img src={product.imgUrl} className="mx-auto" />
          </div>
          <h1 className=" text-sm text-center pb-2">{product.name}</h1>
          <h1 className=" text-sm text-center pb-2">{`NT$${product.price}`}</h1>
          <div className=" mx-1 flex justify-center">
            {getItemQuantity(product.id) === 0 ? (
              <button
                className="w-full h-8 rounded-lg bg-green-400 shadow-lg"
                onClick={() => increaseCartQuantity(product.id)}
              >
                加入購物車
              </button>
            ) : (
              <div className=" flex-col align-middle justify-center">
                <div className=" flex align-middle">
                  <button
                    className=" mx-1 w-8 h-8 rounded-lg bg-green-400 "
                    onClick={() => decreaseCartQuantity(product.id)}
                  >
                    -
                  </button>
                  <div className=" text-xs">
                    已加入數量
                    <span className=" text-xl">
                      {getItemQuantity(product.id)}
                    </span>
                  </div>
                  <button
                    className=" mx-1 w-8 h-8 rounded-lg bg-green-400"
                    onClick={() => increaseCartQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className=" w-36 mx-1 my-1 h-8 rounded-lg bg-red-500 justify-center"
                  onClick={() => removeFormQuantity(product.id)}
                >
                  移除
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
