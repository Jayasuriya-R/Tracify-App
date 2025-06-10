import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const BarChartData = ({data}) => {
//     const cases = [
//     { status: "Open", count: 11 ,color:'red'},
//     { status: "In-Progress", count: 8 ,color:'blue'},
//     { status: "Resolved", count: 10 ,color:'green'},
//   ];
//   const data = [
//     { name: "Jan", sales: 4000 },
//     { name: "Feb", sales: 3000 },
//     { name: "Mar", sales: 5000 },
//     { name: "Apr", sales: 2780 },
//     { name: "May", sales: 3890 },
//   ];
  return (
    <div className="w-full h-96 py-4 pr-6 -ml-3 shadow-lg drop-shadow-2xl rounded-lg">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="status" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" >
        {/* {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))} */}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
</div>
  );
};

export default BarChartData;
