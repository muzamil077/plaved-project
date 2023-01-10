import React from "react";
import MyLineChart from "../../src/component/charts/charts";

const HomePage = () => {
  return (
    <div className="">
      <div>
        <h2 className="font-semibold  text-2xl">Goodmorning, Carles</h2>
      </div>
      <div className="mt-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103408.16812938025!2d74.30191431989662!3d35.91013101395395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e649e3642543b1%3A0x40fd0ca3ca17282b!2sGilgit!5e0!3m2!1sen!2s!4v1663738425529!5m2!1sen!2s"
          className="w-full h-[200px]"
        ></iframe>
      </div>
      <div className="mt-10">
        <MyLineChart />
      </div>
    </div>
  );
};

export default HomePage;
