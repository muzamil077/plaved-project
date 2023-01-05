import Image from 'next/image'
import React from 'react'
interface componentType{
    img:any,
    heading?:string,
    headingone?:string,
    headingtwo?:string,
    
}
const Sidarsection = ({img,heading,headingone,headingtwo}:componentType) => {
  return (
    <div>
         <div className=" lg:block md:hidden sm:hidden  bg-signUp h-screen bg-blue-700 bg-no-repeat bg-cover bg-fixed ">
          <Image
            className="absolute left-20 top-16"
            width={209}
            height={50}
            src={img}
            alt={"img"}
          />
          <div className="flex h-screen justify-center items-center ">
            <div className="m-auto text-center">
              <h3 className="text-xl tracking-normal font-normal text-white">
             {heading}
              </h3>
              <h1 className="text-4xl  leading-normal tracking-normal text-white font-bold">
               {headingone}
              </h1>
              <h4 className="text-white tracking-normal text-center w-2/4">
              {headingtwo}
              </h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidarsection
