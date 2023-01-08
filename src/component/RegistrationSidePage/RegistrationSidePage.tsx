import Image from "next/image";
import React from "react";
import logo from "../../../pages/images/logo.png";
import registerImg from "../../../pages/images/registerImg.png";

interface registrationProps {
  imgOne: any;
  heading: string;
  headingOne: string;
  imgTwo: any;
}

const RegistrationSidePage = ({
  imgOne,
  imgTwo,
  heading,
  headingOne,
}: registrationProps) => {
  return (
    <div>
      <div
        className="bg-signUp w bg-[#0066af] lg:block h-screen"
        
      >
        <div className="relative">
          <Image
            className="absolute pl-10 mt-10"
            width={209}
            height={50}
            src={logo}
            alt={""}
          />
        </div>
        <div className="flex space-x-24 h-screen justify-center items-center ">
          <div className="m-auto text-center">
            <div className=" mt-36">
              <h3 className="text-3xl text-[text] tracking-normal font-normal text-white">
                {heading}
              </h3>
              <h1 className="text-sm  leading-normal tracking-normal text-white ">
                {headingOne}
              </h1>
              <Image
                  className=" "
                  width={349}
                  height={700}
                  src={registerImg}
                  alt={""}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSidePage;
