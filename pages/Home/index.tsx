import React from "react";
import MyLineChart from "../../src/component/charts/charts";

const HomePage = () => {
  return (
    <div className=" float-right">
        <div>
            <h2 className="font-semibold  text-2xl">Goodmorning, Carles</h2>
        </div>
      <MyLineChart />
    </div>
  );
};

export default HomePage;
