import React, { FC } from "react";
import Sidebar from "../sidebar/sidebar";
import TopBar from "../TopBar/TopBar";
interface IProps {
  children?: React.ReactNode;
}
const Layout : FC<IProps>= ({ children }) => {
  return (
    // <div>
    //   {/* <TopBar />
    //   <div className="bg-green-300 grid grid-cols-12 gap-4">
    //     <div className="col-span-4">
    //       <Sidebar />
    //     </div>
    //     <div className="col-span-8">{children}</div>
    //   </div> */}
    // </div>
    <>
    <TopBar/>
    <div className="flex">
    <Sidebar/>
    <main className="mt-20 p-8">{children}</main>
    </div>

   
    </>
  );
};

export default Layout;
