import React, { FC } from "react";
import Sidebar from "../sidebar/sidebar";
import TopBar from "../TopBar/TopBar";
interface IProps {
  children?: React.ReactNode;
}
const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <TopBar />
      <div className="flex w-full ">
        <Sidebar />
        <main className=" w-full p-6">{children}</main>
      </div>
    </>
  );
};

export default Layout;
