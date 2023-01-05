import Image from "next/image";
import React from "react";


interface componentType {
  img:  any;
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
        <Image
          className="absolute left-20 top-16"
          width={209}
          height={50}
          src={img}
          alt={"img"}
        />
        <div className="flex h-screen justify-center items-center ">
          <div className="m-auto text-center">
            <h3 className="text-4xl text-[text] tracking-normal font-normal text-white">
              {heading}
            </h3>
            <h1 className="text-4xl  leading-normal tracking-normal text-white font-bold">
              {headingone}
            </h1>
            <h4 className="text-white tracking-normal m-auto text-center">
              {headingtwo}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidbarSection;
