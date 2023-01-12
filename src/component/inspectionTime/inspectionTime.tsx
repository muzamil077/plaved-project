import React from "react";
import ShowInspection
 from "../showInspection/showInspection";

const InspectionTime = () => {
  return (
    <>
      <div className="w-[400px] h-[150px] rounded-lg bg-slate-400">
        <h2 className="p-4">Inspection Time component is here</h2>
      </div>
      <div>
        <ShowInspection/>
      </div>
    </>
  );
};

export default InspectionTime;
