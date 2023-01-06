import Image from "next/image";
import React from "react";

interface componentType {
  img: any;
  image?: any;
  heading: string;
  headingone: string;
  headingtwo: string;
}
const SidbarSection = ({
  img,
  image,
  heading,
  headingone,
  headingtwo,
}: componentType) => {
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <Image
            className="absolute mt-10 pl-10"
            width={209}
            height={50}
            src={img}
            alt={"img"}
          />
        </div>
        <div className="flex space-x-10 h-screen justify-center items-center ">
          <div className="m-auto text-center">
            <div className="flex  flex-wrap justify-center">
              {image && (
                <Image
                  className=""
                  width={300}
                  height={300}
                  src={image}
                  alt={""}
                />
              )}
            </div>
            <div className="mt-0">
              <h3 className="text-xl text-[text] tracking-normal font-normal text-white">
                {heading}
              </h3>
              <h1 className="text-3xl  leading-normal tracking-normal text-white font-bold">
                {headingone}
              </h1>
              <h4 className="text-white tracking-normal mx-40 bg-red-500 m-auto text-center">
                {headingtwo}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidbarSection;
