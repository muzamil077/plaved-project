import React, { useEffect, useState, useContext } from "react";
import vectore from "../../../pages/images/vectore.png";
import img from "../../../pages/images/img.png";
import Image from "next/image";
import Toggal from "../toggel/toggel";
import { myContext } from "../../../pages/_app";

const inspectionData = [
  {
    pic: vectore,
    title: "Villa Blanquerna Inspection",
    para: "This session is a demonstration for the different users of our application.",
    picTwo: img,
    name: "Assigned to @ Muzamil hussain",
  },
];

const CardInspection = () => {
  const [date, setDate] = useState(new Date());
  const { enabled, setEnabled } = useContext(myContext);
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <div className="flex  space-x-6">
        <div className="mt-2">
          <Image src={vectore} alt={""} />
        </div>
        <div>
          <h2 className="font-semibold text-lg">Villa Blanquerna Inspection</h2>
          <h3 className="font-medium text-sm text-[#748A96] leading-5 ">
            This session is a demonstration for the different users of our
            application.
          </h3>
          <figcaption className="flex border-b-2 mt-4 items-center  space-x-3">
            <Image width={27} height={27} src={img} alt={"image"} />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div className="font-medium text-sm text-[#748A96] leading-5">
                Assigned to @Muzamil hussain
              </div>
            </div>
          </figcaption>
          <div className="flex items-center space-x-16">
            <div className=" text-blue-500 mt-5">
              <h2 className="text-sm">
                {date.toLocaleDateString()}{" "}
                <span>{date.toLocaleTimeString()}</span>
              </h2>
            </div>
            <div className=" flex items-center  space-x-1 mt-6">
              <div>
                <Toggal />
              </div>
              <div>
                {enabled ? (
                  <h2 className="text-sm">Open</h2>
                ) : (
                  <h2 className="text-sm">Closed</h2>
                )}
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInspection;
