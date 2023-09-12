import React from "react";
import HeroImage from "../assets/heroImage.JPG";

const Home = () => {
  return (
    <div
      name="home"
      id="Home"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="text-blue-500 flex flex-col justify-center h-full ">
          <h3 className="text-4xl sm:text-7xl font-bold text-white ">
            Prince Baweja
          </h3>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-4 ">
            Software Developer
          </h3>
          <p className="text-gray-500 py-4 max-w-md text-xl">
            Professional with 2 years of industry experience and currently working as a Associate Software Developer at Xperi.
          </p>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-2/3 h-full"
            width={5}
            height={5}

          />
        </div>
      </div>
    </div>
  );
};

export default Home;
