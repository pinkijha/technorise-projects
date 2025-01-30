import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 50 },
  { name: "Feb", value: 120 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 40 },
  { name: "May", value: 35 },
  { name: "Jun", value: 50 },
  { name: "Jul", value: 130 },
  { name: "Aug", value: 40 },
  { name: "Sep", value: 90 },
  { name: "Oct", value: 70 },
  { name: "Nov", value: 150 },
  { name: "Dec", value: 60 },
];

const SmoothLineChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg text-xs text-gray-200 shadow-md">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#005bff"
            strokeWidth={3}
            fillOpacity={1}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SmoothLineChart;
