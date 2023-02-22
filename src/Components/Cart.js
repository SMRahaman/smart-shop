import React, { useContext } from "react";
import { cartContext } from "../Layout/Main";
import { deleteShoppingCart, removeCart } from "../Utilits/FakeDB";
import Items from "./Items";

const Cart = () => {
  const [cart, setCart] = useContext(cartContext);

  const handleRemovItem = (id) => {
    const remeinging = cart.filter((product) => product.id !== id);
    setCart(remeinging);
    removeCart(id);
    alert("product delete");
  };

  const deleteCart = () => {
    if (cart.length) {
      setCart([]);
      deleteShoppingCart();
      alert("oreder complete");
    } else {
      alert("cart is empty");
    }
  };

  let total = 0;
  for (const product of cart) {
    total = total + product.price * product.quantity;
  }
  return (
    <div className="w-8/12 mx-auto">
      <ul className="flex flex-col divide-y divide-gray-700">
        {cart.map((product) => (
          <Items
            key={product.id}
            product={product}
            handleRemovItem={handleRemovItem}
          ></Items>
        ))}
      </ul>
      {cart == "" && (
        <div>
          <h1 className="text-blue-500 text-3xl mt-12 mb-12">Cart is Empty</h1>
        </div>
      )}
      <div className="text-right mb-5 font-bold">Total Ammount:{total}$</div>
      <button
        onClick={deleteCart}
        type="button"
        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 dark:text-gray-900 mb-12"
      >
        Place Order
      </button>
    </div>
  );
};

export default Cart;
