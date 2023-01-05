import Link from "next/link";
import React from "react";
import SidbarSection from "../../src/component/sidePage/Sidepage";
import {MdOutlineMarkEmailUnread} from "react-icons/md"
import imag from "../images/logo.png";
const ForgetPasswordEmail = () => {
  return (
    <div className="flex">
      <div className=" hidden bg-signUp w-[50%] bg-[#0066af] lg:block h-screen">
        <SidbarSection
          img={imag}
          heading="Helping Engineers to"
          headingone="Connect the teams"
          headingtwo="Plaved help the teams and managers with all there constructions related inspections."
        />
      </div>
      <div className="flex  justify-center items-center lg:mt-10 md:mt-24   lg:w-2/4 md: w-screen sm:w-full text-black  bg-white-300">
        <div className="m-auto mt-24">
          <div className="flex justify-center text-5xl rounded-lg text-white   bg-[#86B6FE] w-24 p-4 m-auto">
            <MdOutlineMarkEmailUnread/>
          </div>
          <h1 className="text-center mt-6  text-2xl ">
            Recovery Email has been sent
          </h1>
          <h2 className="text-sm mt-5 text-center">
            Now please check the Email and follow the instructions
            <div className="relative mt-6">
              <div className="absolute  inset-0 flex items-center">
                <div className="w-full border-t border-black" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>
            <div className="mt-6 text-blue-500">
              <Link  href={""}>
                Signin With Your Account
              </Link>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordEmail;
