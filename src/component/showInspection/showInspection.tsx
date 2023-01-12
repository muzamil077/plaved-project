import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CardInspection from "../cardComponent";

const ShowInspection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative inline-block">
      <div className="flex items-center space-x-24">
        <div className="flex items-center space-x-4">
          <h2 className="mt-4 text-gray-700">Show</h2>
          <select
           onClick={() => setOpen(!open)}
            id="location"
            name="location"
            className="mt-4 block border cursor-pointer  rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="Canada"
          >
            <option > Closed inspections</option>
            <option> Open inspections</option>
          </select>
        </div>
        <div className="mt-4">
          <Link href={"/AllInspectionPage"}>
            <h2 className="text-sm text-blue-500 cursor-pointer">View all</h2>
          </Link>
        </div>
        </div>
        {open && (
          <div
            className="absolute float-left  z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <CardInspection />
          </div>
        )}
      </div>
    </>
  );
};

export default ShowInspection;
