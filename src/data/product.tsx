interface Product {
  name: string;
  price: number;
  imgUrl: string;
  id: number;
}
export function getProduct(id: number): Product | null {
  switch (id) {
    case 1:
      return {
        name: "原味蘿蔔糕",
        price: 120,
        imgUrl: require("../img/one.jpg"),
        id: 1,
      };
    case 2:
      return {
        name: "芋頭蘿蔔糕",
        price: 140,
        imgUrl: require("../img/two.jpg"),
        id: 2,
      };
    case 3:
      return {
        name: "古早味芋頭巧",
        price: 160,
        imgUrl: require("../img/three.jpg"),
        id: 3,
      };
    default:
      console.warn("Can't find this id.");
      return null;
  }
}

export const getAllProduct = (): Product[] => {
  const allIds = [1, 2, 3];
  // @ts-ignore
  return allIds.map((id) => getProduct(id));
};
