import Image from "next/image";
import React, { createContext, useState, useContext } from "react";
import Eye from "../../../pages/images/Eye.png";
import pic from "../../../pages/images/imgT.png";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { myContext } from "../../../pages/_app";
import Link from "next/link";

const SidebarData = [
  { title: "Home", icon: <AiOutlineHome />, urls: "/Home" },
  { title: "Reports", icon: <TbReportSearch />, urls: "/Reports"  },
  { title: "Documents", icon: <MdOutlineDocumentScanner /> , urls: "Documents"},
];

const Sidebar = () => {
  const { open, setOpen } = useContext(myContext);
  const clickHendel = (): any => {
    setOpen(!open);
    console.log("hello  global click is here");
  };
  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? "w-[218px]" : "w-20"
          } p-5 duration-300 pt-8 h-screen rounded-xl relative bg-blue-500`}
        >
          <div className="flex  items-center space-x-4">
            <div>
              <Image src={Eye} alt={""} />
            </div>
            <div className={`${!open && "hidden"}`}>
              <Image src={pic} alt={""} />
            </div>
          </div>
          <ul className="mt-14 ">
            {SidebarData.map((items, index) => (
              <>
                <Link href={`${items.urls}`}>
                  <li
                    key={index}
                    className=" text-white  -right-3  gap-x-4  hover:bg-gray-500  rounded-lg text-md flex p-2 cursor-pointer   items-center mt-6"
                  >
                    <span className="text-2xl  block float-right ">
                      {items.icon ? items.icon : <RiDashboardFill />}
                    </span>
                    <span
                      className={`text-base font-medium flex-1 ${
                        !open && "hidden"
                      }`}
                    >
                      {items.title}
                    </span>
                  </li>
                </Link>
              </>
            ))}
            <div className="text-white absolute bottom-10 gap-x-4  hover:bg-gray-500 rounded-lg text-md flex p-2 cursor-pointer   items-center mt-6">
              <span className="text-2xl  block float-right">
                {" "}
                <AiOutlineSetting />
              </span>
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                Setting
              </span>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
