import { getTocart } from "../Utilits/FakeDB";

const productAndCartData = async () => {
  const productsData = await fetch("product.json");
  const products = await productsData.json();
  console.log(products);

  const savedCart = getTocart();
  const initialCart = [];
  for (const id in savedCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      const quantity = savedCart[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }
  return { products, initialCart };
};

export { productAndCartData };
