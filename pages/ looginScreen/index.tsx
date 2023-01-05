import Image from "next/image";
import React from "react";
import img from "../images/logo.png";
import FormInput from "../../src/component/Input";
import Button from "../../src/component/Button";
import Link from "next/link";
import Sidarsection from "../../src/component/sidebar";

const LoginScreen = () => {
  return (
    <>
      <div className="flex">
        <div className=" w-[50%] ">
          <Sidarsection
            img={img}
            heading=" Helping Engineers to"
            headingone="Connect the teams"
            headingtwo={`Plaved help the teams and managers with all there
                constructions related inspections.`}
          />
        </div>
        <div className=" flex  justify-center items-center  lg:w-2/4 md:w-full sm:w-full  bg-white-300">
          <div className="m-auto mt-32 ">
            <h1 className="text-center text-3xl ">Welcome Back!</h1>
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
                <span className="ml-2">Remember Password</span>
              </div>
              <div>
                <Link className="text-blue-500" href={""}>
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <Button
                onClick={() => alert("Button 1 is clicked !")}
                variant="info"
                size="xl"
              >
                Login
              </Button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginScreen;
