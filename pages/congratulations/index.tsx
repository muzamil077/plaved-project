import React from "react";
import SidbarSection from "../../src/component/sidePage/Sidepage";
import imag from "../../pages/images/logo.png";
import { HiThumbUp } from "react-icons/hi";
import laptop from "../../pages/images/laptop.png";

const Congratulations = () => {
  return (
    <div className="flex">
      <div className=" hidden bg-signUp w-[50%] bg-[#0066af] lg:block h-screen">
        <SidbarSection
          img={imag}
          image={laptop}
          heading="Helping Engineers to"
          headingone="Connect the teams"
          headingtwo="Plaved help the teams and managers with all there constructions related inspections."
        />
      </div>
      <div className="flex  justify-center items-center lg:mt-10 md:mt-24   lg:w-2/4 md: w-screen sm:w-full text-black  bg-white-300">
        <div className="m-auto mt-32">
          <div className="flex justify-center text-5xl rounded-lg text-white   bg-[#86B6FE] w-24 p-4 m-auto">
            <HiThumbUp />
          </div>
          <h1 className="text-center mt-6  text-2xl ">Congratulations</h1>
          <h2 className="text-sm mt-5 text-center">
            Your password has been reset, Now you will <br /> be redirected to
            the login screen in
          </h2>
          <div className="flex justify-center mt-10 text-[#86B6FE] space-x-2 items-end " >
            <h1 className="text-5xl  font-bold">5</h1>
            <h3>secs</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
