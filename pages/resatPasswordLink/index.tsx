import React from "react";
import laptop from "../../pages/images/laptop.png";
import imag from "../../pages/images/logo.png";
import Button from "../../src/component/Button";
import FormInput from "../../src/component/Input";
import SidbarSection from "../../src/component/sidePage/Sidepage";
import { MdLiveHelp } from "react-icons/md";
import Link from "next/link";

const ResatPasswordLink = () => {
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
      <div className=" flex  justify-center items-center  w-screen lg:w-2/4 md:w-full sm:w-full  bg-white-300">
        <div className="m-auto mt-36">
          <h1 className="text-center  text-2xl ">Create New Password</h1>
          <h3 className="text-center text-sm">Look even slightly believable</h3>
          <form action="submit" className="md:w-96">
            <FormInput
              className="focus:outline-none hover:border-b-2 mt-6 w-full tracking-normal border-blue-400 p-2"
              type="input"
              placeholder={"Enter Email"}
            />
            <br />
            <FormInput
              className="focus:outline-none hover:border-b-2 mt-8 w-full leading-normal tracking-normal border-blue-400 p-2"
              type="input"
              placeholder={"Enter password"}
            />
            <div className="mt-8">
              <Link href={"/congratulations"}>
                <Button
                  onClick={() => alert("Button 1 is clicked !")}
                  variant="info"
                  size="xl"
                >
                  Reset Password
                </Button>
              </Link>
            </div>
          </form>
          <div className="text-[#0F6BAC] space-x-2 flex items-center ml-24 mt-10">
            <span className="text-[#258BD6] text-xl">
              <MdLiveHelp />
            </span>
            <h2> Help & Support Center</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResatPasswordLink;
