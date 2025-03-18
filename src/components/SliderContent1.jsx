import React from "react";
import { Link } from "react-router-dom";

const SliderContent1 = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4 md:flex-row items-center justify-center px-4  max-w-screen-lg">
      <div className="w-full flex flex-col justify-center items-center gap-2 text-center">
        <h2 className="text-3xl font-bold">
          Choose Your Ultimate Sports Gear From SportHive
        </h2>
        <h3 className="text-lg">
          Gear Up with the Best – Play Hard, Stay Ahead!
        </h3>
        <div className="flex gap-4">
          <Link>
            <button className="btn rounded-full"> Shop Now</button>
          </Link>
          <Link>
            <button className="btn rounded-full"> Learn More</button>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img
          src="https://i.ibb.co/qYkhcGBG/sports-equipments-all-in-one.webp"
          className="w-full max-w-md md:max-w-lg rounded-xl"
        />
      </div>
    </div>
  );
};

export default SliderContent1;
