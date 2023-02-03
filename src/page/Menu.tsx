import React from "react";

export function Menu() {
  const MenuPicture: string = require("../svg/MenuPicture.svg").default;

  return (
    <div className=" flex h-[1000px] bg-yellow-200">
      <img src={MenuPicture} className=" mx-auto" />
    </div>
  );
}
