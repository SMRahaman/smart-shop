import React, { useContext } from "react";
import { cartContext, Datas } from "../Layout/Main";
import { addToDB } from "../Utilits/FakeDB";
import Card from "./Card";

const Shop = () => {
  const products = useContext(Datas);
  const [cart, setCart] = useContext(cartContext);
  const handelAddTOCart = (products) => {
    let newcart = [];
    const exists = cart.find(
      (existingProducts) => existingProducts.id === products.id
    );
    if (!exists) {
      products.quantity = 1;
      newcart = [...cart, products];
    } else {
      const rest = cart.filter(
        (existingProducts) => existingProducts.id !== products.id
      );
      exists.quantity = exists.quantity + 1;
      newcart = [...rest, exists];
    }

    setCart(newcart);
    addToDB(products.id);
    alert("Product added");
  };
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-4/5 m-auto gap-4 my-12">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          handelAddTOCart={handelAddTOCart}
        ></Card>
      ))}
    </div>
  );
};

export default Shop;
