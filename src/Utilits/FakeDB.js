const addToDB = (id) => {
  let shoppingCart = {};

  //get the shoppingCart from Local Storage
  const storedCart = localStorage.getItem("shopping-Cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  //Add Quanatity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newquantity = quantity + 1;
    shoppingCart[id] = newquantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-Cart", JSON.stringify(shoppingCart));
};

//get data from Local Storage
const getTocart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-Cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  return shoppingCart;
};

//Remove Cart

const removeCart = (id) => {
  const storedCart = localStorage.getItem("shopping-Cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-Cart", JSON.stringify(shoppingCart));
    }
  }
};

//Delete Shopping Cart
const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-Cart");
};

export { addToDB, getTocart, deleteShoppingCart, removeCart };
