import Link from "next/link";
import React from "react";
import Button from "../../src/component/Button";
import FormInput from "../../src/component/Input";
import SidbarSection from "../../src/component/sidePage/Sidepage";
import { BsArrowLeft } from "react-icons/bs";
import imag from "../images/logo.png";

const ForgetPassword = () => {
  return (
    <div className="flex">
      <div className=" bg-signUp w-[50%] bg-[#0066af] lg:block md:hidden sm:hidden h-screen">
        <SidbarSection
          img={imag}
          heading="Helping Engineers to"
          headingone="Connect the teams"
          headingtwo="Plaved help the teams and managers with all there constructions related inspections."
        />
      </div>
     
      <div className=" flex  justify-center items-center  lg:w-2/4 md:w-full sm:w-full  bg-white-300">
      <div className="pl-6 flex text-sm absolute top-2  left-2/4">
        <div className="mr-2 text-xl ">
          <BsArrowLeft />
        </div>
        <div>
          <Link href={"/looginScreen"}>Back to Login</Link>
        </div>
      </div>
        <div className="m-auto">
          <h1 className="text-center  text-3xl ">Forgot Password?</h1>
          <h2 className="text-md mt-5 text-center">
            Don’t Worry, We got you covered
          </h2>
          <form action="submit" className="md:w-96">
            <FormInput
              className="focus:outline-none hover:border-b-2 mt-8 w-full leading-normal tracking-normal border-blue-400 p-2"
              type="input"
              placeholder={"Enter Email Address"}
            />
            <div className="mt-8">
              <Button
                onClick={() => alert("Button 1 is clicked !")}
                variant="info"
                size="xl"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
