import Image from "next/image";
import React from "react";
import imag from "../images/logo.png";
import FormInput from "../../src/component/Input";
import Button from "../../src/component/Button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import SidbarSection from "../../src/component/sidePage/Sidepage";

const LoginScreen = () => {
  return (
    <>
      <div className="flex">
        <div className=" hidden bg-signUp w-[50%] bg-[#0066af] lg:block h-screen">
          <SidbarSection
            img={imag}
            heading="Helping Engineers to"
            headingone="Connect the teams"
            headingtwo="Plaved help the teams and managers with all there constructions related inspections."
          />
        </div>
        {/* <div className="flex absolute align-center    space-x-60 items-center  bottom-2 pl-10  left-2/4">
            <h2 className="text-sm">Privecy Policy</h2>
            <h2 className="text-sm">@ 2022 - Plaved Tech SL. All Rights Reserved.</h2>
          </div> */}
        <div className=" flex  justify-center items-center  w-screen lg:w-2/4 md:w-full sm:w-full  bg-white-300">
          <div className="m-auto mt-24">
            <h1 className="text-center  text-3xl ">Welcome Back!</h1>
            <h3 className="items-start mt-10 leading-normal">
              New Here?{" "}
              <Link className="text-blue-500" href={""}>
                Signup Now
              </Link>{" "}
            </h3>
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
            </form>
            <div className="flex justify-between mt-5">
              <div>
                <FormInput type="checkbox" />{" "}
                <span className="ml-2 text-xs">Remember Password</span>
              </div>
              <div>
                <Link
                  className="text-blue-500 text-xs"
                  href={"/forgetPassword"}
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <Link href={"/layout"}>
                <Button
                  onClick={() => alert("Button 1 is clicked !")}
                  variant="info"
                  size="xl"
                >
                  Login
                </Button>
              </Link>
            </div>
            <div className="relative mt-3">
              <div className="absolute  inset-0 flex items-center">
                <div className="w-full border-t border-gray-400" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>
            <div className="mt-4 border-2 h-15 ml-3 border-blue-400">
              {/* <span className="text-xl relative top-7"><FcGoogle/></span> */}
              <Button
                onClick={() => alert("Button 1 is clicked !")}
                variant="disable"
                size="xl"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginScreen;
