import React, { useEffect, useState, useContext } from "react";
import vectore from "../../../pages/images/vectore.png";
import img from "../../../pages/images/img.png";
import img1 from "../../../pages/images/img.png";
import img2 from "../../../pages/images/img.png";
import img3 from "../../../pages/images/img.png";
import img4 from "../../../pages/images/img.png";
import img5 from "../../../pages/images/img.png";
import Image from "next/image";
import Toggal from "../toggel/toggel";
import Button from "../Button";
import { myContext } from "../../../pages/_app";

const inspectionData = [
  {
    pic: vectore,
    title: "Villa Blanquerna Inspection",
    para: "This session is a demonstration for the different users of our application.",
    picTwo: img,
    name: "Assigned to @ Muzamil hussain",
  },
  {
    pic: vectore,
    title: "Many desktop publishing husssmdsj packages",
    para: "This session is a demonstration for the different users of our application.",
    picTwo: img1,
    name: "Assigned to @ Muzamil hussain",
  },
  {
    pic: vectore,
    title: "Demo Session for DEMO",
    para: "This session is a demonstration for the different users of our application.",
    picTwo: img2,
    name: "Assigned to @ Muzamil hussain",
  },
  {
    pic: vectore,
    title: "Prova de mostra Magellan 3 ",
    para: "This session is a demonstration for the different users of our application.",
    picTwo: img3,
    name: "Assigned to @ Muzamil hussain",
  },
  {
    pic: vectore,
    title: "Socket Location",
    para: "This session is a demonstration for the different users of our application.",
    picTwo: img4,
    name: "Assigned to @ Muzamil hussain",
  },
  {
    pic: vectore,
    title: "Agustin Quintana - Motorola G8",
    para: "This session is a demonstration for the different users of our application.",
    picTwo: img5,
    name: "Assigned to @ Muzamil hussain",
  },
];

const CardInspection = () => {
  const [date, setDate] = useState(new Date());
  const open = true;
  const { enabled, setEnabled } = useContext(myContext);
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <div className="flex-col space-y-10 overflow-scroll  h-80  space-x-6">
        {inspectionData.map((items, index) => (
          <>
            <div>
              <div className="flex space-x-4">
                <div className="mt-2">
                  <Image src={items.pic} alt={""} />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{items.title}</h2>
                  <h3 className="font-medium text-sm text-[#748A96] leading-5 ">
                    {items.para}
                  </h3>
                  <figcaption className="flex border-b-2 mt-4   items-center  space-x-3">
                    <Image width={27} height={27} src={img} alt={"image"} />
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div className="font-medium text-sm text-[#748A96] leading-5">
                        {items.name}
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
                          <h2 className="text-sm">Close</h2>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    {enabled === open ? (
                      <div className="border-2  h-10  items-center flex text-center border-blue-300">
                        <Button variant="defaulte" size="lg">
                          Inspections
                        </Button>
                      </div>
                    ) : (
                      <div className="flex space-x-4 ">
                        <div className="border-2  h-10  items-center flex text-center border-blue-300">
                          <Button size="md" variant="default">
                            See Img
                          </Button>
                        </div>
                        <div className="border-2  h-10  items-center flex text-center border-blue-300">
                          <Button size="md" variant="default">
                            See Locat
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CardInspection;
