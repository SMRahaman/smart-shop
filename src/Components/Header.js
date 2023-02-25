import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Layout/Main";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "./UserContext";
const Header = () => {
  const { user, Logout } = useContext(AuthContext);
  console.log(user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useContext(cartContext);

  const logoutHandler = () => {
    Logout()
      .then(() => {
        alert("logout suceess");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div class="bg-gray-900">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
            Smart Shop
          </span>

          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="shop" className="text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link to="signup" className="text-white">
                Sign UP
              </Link>
            </li>
            <li>
              <Link to="signin" className="text-white">
                Sign In
              </Link>
            </li>
            <li>
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="text-white">
                  {user?.email}
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button onClick={logoutHandler}>Logout</button>
                  </li>
                  <li>
                    <Link>Password change</Link>
                  </li>
                  <li>
                    <Link>Profile</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative">
              <Link to="cart" className="text-white">
                <ShoppingCartIcon className="h-6 w-6 text-white "></ShoppingCartIcon>
              </Link>

              <p className="text-white bg-red-700 rounded-full absolute bottom-3 left-3 w-full">
                {cart.length}
              </p>
            </li>
          </ul>

          <div class="lg:hidden flex items-center">
            <li className="relative lg:hidden md:hidden mb-5 mr-6 ">
              <Link to="cart" className="text-white">
                <ShoppingCartIcon className="h-6 w-6 text-white "></ShoppingCartIcon>
              </Link>
              <p className="text-white bg-red-700 rounded-full absolute bottom-3 left-3 w-full text-center">
                {cart.length}
              </p>
            </li>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="text-white">
                {user?.email}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button onClick={logoutHandler}>Logout</button>
                </li>
                <li>
                  <Link>Password change</Link>
                </li>
                <li>
                  <Link>Profile</Link>
                </li>
              </ul>
            </div>
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="about">About</Link>
                      </li>
                      <li>
                        <Link to="shop">Shop</Link>
                      </li>
                      <li>
                        <Link to="cart">Cart</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
