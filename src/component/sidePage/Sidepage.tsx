import Image from "next/image";
import React from "react";

interface componentType {
  img: any;
  heading: string;
  headingone: string;
  headingtwo: string;
}
const SidbarSection = ({
  img,
  heading,
  headingone,
  headingtwo,
}: componentType) => {
  return (
    <div className="">
      <div className="">
        <div className="relative" >
          <Image className="absolute mt-10 pl-10" width={209} height={50} src={img} alt={"img"} />
        </div>
        <div className="flex h-screen justify-center items-center ">
          <div className="m-auto text-center">
            <h3 className="text-xl text-[text] tracking-normal font-normal text-white">
              {heading}
            </h3>
            <h1 className="text-4xl  leading-normal tracking-normal text-white font-bold">
              {headingone}
            </h1>
            <h4 className="text-white tracking-normal w-32 m-auto text-center">
              {headingtwo}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidbarSection;
