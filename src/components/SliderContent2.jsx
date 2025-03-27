import React from "react";

const SliderContent2 = () => {
  return (
    <div className="container mx-auto px-4 max-w-screen-lg text-center">
      <h2 className="text-3xl font-bold"> Shop by Sport</h2>
      <h3 className="text-lg mb-4">Find the Perfect Gear for Every Game</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center ">
        <div className="card bg-base-100 shadow-sm">
          <figure className="px-4 pt-4 mx-auto">
            <img
              src="https://i.ibb.co/Xrpfsf6j/football.jpg"
              alt="Shoes"
              className="rounded-xl w-xs"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Football</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure className="px-4 pt-4 mx-auto">
            <img
              src="https://i.ibb.co/FbqdZKK3/running.jpg"
              alt="Shoes"
              className="rounded-xl w-xs"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Running</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderContent2;
