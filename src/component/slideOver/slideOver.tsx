import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import FormInput from "../Input";
import { myContext } from "../../../pages/_app";
import { RiMessage2Line } from "react-icons/ri";
import Toggal from "../toggel/toggel";
import Button from "../Button";

const SlideOver = () => {
  const { slide, setSlide } = useContext(myContext);
  const { toggal, setToggal } = useContext(myContext);
  const newToggal = true;
  return (
    <Transition.Root show={slide}>
      <Dialog as="div" className="relative z-10" onClose={setSlide}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        onClick={() => setSlide(false)}
                        type="button"
                        className="  bg-slate-300 text-blue-500 p-1 rounded-full mt-3  hover:text-white"
                      >
                        <AiOutlineClose className="text-xl" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Session Information
                      </Dialog.Title>
                    </div>
                    <div className="mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <form>
                        <FormInput
                          type="input"
                          className="focus:outline-none hover:border-b-2 border-blue-500 cursor-pointer p-2 rounded-lg  w-full leading-normal tracking-normal  "
                          placeholder="Session Name"
                        />
                        <FormInput
                          type="text"
                          placeholder="Session Description"
                          className="p-2 h-24"
                        />
                      </form>
                      <div className="mt-1 w-full  ">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103408.16812938025!2d74.30191431989662!3d35.91013101395395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e649e3642543b1%3A0x40fd0ca3ca17282b!2sGilgit!5e0!3m2!1sen!2s!4v1663738425529!5m2!1sen!2s"
                          className="w-full h-[200px]"
                        ></iframe>
                      </div>
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="h-full" aria-hidden="true" />
                      </div>
                      {/* /End replace */}
                      <div className="flex items-center  space-x-6">
                        <div className="flex items-center mt-8 space-x-4">
                          <div onClick={() => setToggal(!toggal)}>
                            <Toggal />
                          </div>
                          {toggal === newToggal ? (
                            <h2 className="text-sm">
                              Inspection is open to user
                            </h2>
                          ) : (
                            <h2 className="text-sm">
                              Inspection is close to user
                            </h2>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mt-7 text-blue-500">
                          <RiMessage2Line className="text-md mt-1" />
                          <h2 className="text-sm">Send SMS Invite</h2>
                        </div>
                      </div>
                      <div className="justify-center w-40 text-sm flex items-center">
                        <div>
                          <Button variant="success" size="md">
                            Session
                          </Button>
                        </div>
                        <div>
                          <Button variant="success" size="md">
                            Changes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default SlideOver;
