import React from "react";
import RegistrationSidePage from "../../src/component/RegistrationSidePage/RegistrationSidePage";
import logo from "../../pages/images/logo.png";
import ragisterImg from "../../pages/images/laptop.png";
import BillingPage from "../Billing";
import ProgressBar from "../../src/component/progressbar/ProgressBar";

const steps = [
  { id: 1, name: "Step 1", status: "complete" },
  { id: 2, name: "Step 2", status: "complete" },
  { id: 3, name: "Step 3", status: "complete" },
  { id: 4, name: "Step 4", status: "complete" },
  { id: 5, name: "Step 5", status: "complete" },
];
const RagistrationUserOne = () => {
  return (
    <div className="flex">
      <div className="w-[60%]">
        <RegistrationSidePage
          imgOne={logo}
          heading={"Take control"}
          headingOne={`We help Architects & Engineers be 3x more productive`}
          imgTwo={ragisterImg}
        />
      </div>
      <div>
        <BillingPage />
      </div>
    </div>
  );
};

export default RagistrationUserOne;
