import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./UserContext";

const Signin = () => {
  const { Signin } = useContext(AuthContext);
  const handlerSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    Signin(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="p-12 border border-black">
        <h2 className="text-3xl font-bold text-center text-red-900">Sign In</h2>
        <form
          onSubmit={handlerSubmit}
          className="lg:w-1/4 sm: w-80 mx-auto my-12 shadow-lg p-12"
        >
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="text-center">
            <button className="px-8 py-3 font-semibold rounded bg-blue-100 dark:text-gray-800">
              Sign In
            </button>
          </div>
          <div className="mt-5">
            <small className="text-right">
              Do not have an account?
              <Link to="/signup" className="text-blue-900 font-bold">
                Sign up
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
