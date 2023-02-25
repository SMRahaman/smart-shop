import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="bg-gray-800 text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            WELCOME TO MY SMART SHOP
            <span className="dark:text-violet-400"></span>
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Smart shop means here have many updated technology. Likes Google
            Assitant, Robot Fan, Robot Cooler etc.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="/shop">
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">
                Shopping Start
              </button>
            </Link>
            <button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
