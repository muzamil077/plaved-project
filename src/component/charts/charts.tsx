import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const MyLineChart = () => {
  const [data] = useState([
    { name: "jan", open: 4000, close: 2400, amt: 2400 },
    { name: "feb", open: 3000, close: 1398, amt: 2210 },
    { name: "mar", open: 2000, close: 9800, amt: 2290 },
    { name: "apr", open: 2780, close: 3908, amt: 2000 },
    { name: "may", open: 1890, close: 4800, amt: 90 },
    { name: "jun", open: 2390, close: 3800, amt: 80 },
    { name: "jul", open: 3490, close: 4300, amt: 70 },
    { name: "Aug", open: 3490, close: 4300, amt: 50 },
    { name: "sep", open: 3490, close: 4300, amt: 40 },
    { name: "Oct", open: 3490, close: 4300, amt: 30 },
    { name: "Nov", open: 3490, close: 4300, amt: 20 },
    { name: "Dec", open: 3490, close: 4300, amt: 10 },
  ]);
  return (
    <>
      <h2 className="font-semibold">Analytics</h2>
      <div className="w-[50%]">
        <LineChart
          width={600}
          height={200}
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="open"
            stroke="#8884D8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Close" stroke="#82CA9D" />
        </LineChart>
      </div>
    </>
  );
};
export default MyLineChart;
