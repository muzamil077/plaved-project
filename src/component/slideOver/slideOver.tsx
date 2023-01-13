import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import FormInput from "../Input";
import { myContext } from "../../../pages/_app";

const SlideOver = () => {
  const { slide, setSlide } = useContext(myContext);

  return (
    <Transition.Root show={slide} as={Fragment}>
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
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <FormInput
                      className="focus:outline-none hover:border-b-2 border-blue-500"
                      type="input"
                      placeholder={"Search Session Name or Phone"}
                    />
                      <form >
                        <FormInput
                          type="input"
                          className="focus:outline-none hover:border-2 border-blue-500 p-2 bg-blue-500 rounded-lg  w-full leading-normal tracking-normal  "
                          placeholder="Session Name"
                        />
                        <FormInput
                          className="focus:outline-none hover:border-b-2 border-blue-500"
                          type="input"
                          placeholder={"Search Session Name or Phone"}
                        />
                        <FormInput type="message" />
                      </form>
                      Add your Inspection here please.... Add your Inspection
                      here please.... Add your Inspection here please.... Add
                      your Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please.... Add your Inspection here
                      please.... Add your Inspection here please.... Add your
                      Inspection here please....
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="h-full" aria-hidden="true" />
                      </div>
                      {/* /End replace */}
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
