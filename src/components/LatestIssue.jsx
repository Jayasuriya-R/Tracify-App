import React from "react";
import { issuesData } from "../utils/constants";
import IssueDetails from "./IssueDetails";

const LatestIssue = () => {
  return (
    <div className="h-3/5 mt-[4%] overflow-y-auto shadow-xl rounded-lg ">
      <div className="p-4 font-bold text-lg  text-gray-500">
        <h1>Latest Issues</h1>
      </div>
      {issuesData.map((x) => <IssueDetails key={x.id} desc={x.description} status={x.status} color={x.color}/>)}
    </div>
  );
};

export default LatestIssue;
