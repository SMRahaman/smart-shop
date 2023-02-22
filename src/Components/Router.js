import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Main from "../Layout/Main";
import { productAndCartData } from "../Loader/getCart&Products";
import Cart from "./Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: productAndCartData,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/shop", element: <Shop></Shop> },
        { path: "/cart", element: <Cart></Cart> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Router;
