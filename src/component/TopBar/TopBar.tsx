import React, { useContext, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import Button from "../Button";
import FormInput from "../Input";
import { myContext } from "../../../pages/_app";
import Image from "next/image";
import SlideOver from "../slideOver/slideOver";
import me from "../../../pages/images/me.jpeg"
// import { myContext } from "../../../pages/_app";

const TopBar = () => {  
  const [state, setState] = useState(false);
  const [click, setClick] = useState(false)
  const {open, setOpen} = useContext(myContext)
  const {slide, setSlide} = useContext(myContext)
  // ${open ? "w-5/6" : "w-11/12"}
  return (
    <nav className= {`bg-white mt-2 duration-300 w-full  border-b-2  relative float-right`} >
      <div className="mx-auto abs   max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className=" flex h-16 items-center ">
          <div className="absolute inset-y-0 left-5 flex items-center justify-center">
            <button
              type="button"
              className="inline-flex text-xl text-black items-center justify-center rounded-md p-2  hover:bg-gray-500 hover:text-white "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <AiOutlineMenuFold  onClick={()=> setOpen(!open)} className={`${!open && "rotate-180"}  z-40`} />
            </button>
          </div>
          <div className="flex flex-1  items-center  justify-between sm:items-stretch">
            <div className="flex flex-shrink-0    items-center">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex w-10 items-center  space-x-4">
                  <div className="flex items-center space-x-2">
                    <CiSearch className="text-xl" />
                    <FormInput
                      className="focus:outline-none hover:border-b-2 border-blue-500"
                      type="input"
                      placeholder={"Search Session Name or Phone"}
                    />
                  </div>
                  <div className="space-x-7 flex items-center">
                    <GoPlus className="absolute text-white text-xl top-5 left-96 pr-2" />
                    <Button
                      onClick={() => setSlide(!slide)}
                      variant="info"
                      size="lg"
                    >
                      Add Inspection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" inset-y-0 right-96 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
          
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              <div className="relative ml-3">
                <div>
                  <button
                   onClick={()=> setState(!state)}
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image width={100} height={10} className="rounded w-6" src={me} alt={"me  "}/>
                  </button>
                </div>

                {state && (
                  <div
                    className="absolute bg-blue-500  text-white right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-400 rounded-lg text-sm"
                      role="menuitem"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-400 rounded-lg"
                      role="menuitem"
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm  hover:bg-gray-400 rounded-lg"
                      role="menuitem"
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 w-5/6 relative">
            <a
              href="#"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
      </div>
      <SlideOver/>
    </nav>
  );
};

export default TopBar;
