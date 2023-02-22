import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
export const Datas = createContext([]);
export const cartContext = createContext([]);
const Main = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  console.log(cart);
  return (
    <Datas.Provider value={products}>
      <cartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </cartContext.Provider>
    </Datas.Provider>
  );
};

export default Main;
