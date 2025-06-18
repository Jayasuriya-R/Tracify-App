import React from "react";
import IssueCard from "./IssueCard";
import BarChartData from "./BarChart";

const CardContainer = () => {
  const cases = [
  { status: "Open", count: 5, color: '#ef4444' }, // red
  { status: "In-Progress", count: 10, color: '#3b82f6' }, // blue
  { status: "Resolved", count: 15, color: '#10b981' }, // green
];

  return (
    <>
    <div className="flex flex-wrap justify-center">
        { cases.map((x)=><IssueCard status={x.status} count={x.count} color={x.color}/>)}
    </div>

    <div className="mt-[9%] flex items-center">
        <BarChartData data={cases}/>
    </div>
    </>
  );
};

export default CardContainer;
