import React, { useState } from "react";
import IssueDetails from "./IssueDetails";
import { issuesData } from "../utils/constants";
import Table from "./Table";

const MainContainer = () => {
  const [option, setOption] = useState("All");
  const handleChange = (e) => {
    setOption(e.target.value);
  };
  return (
    <div>
      <div className="flex p-6">
        <h1 className="m-2 text-gray-600 font-medium">Filter by status</h1>
        <div>
          <select
            className=" mx-4 h-10 border border-gray-400 rounded-lg p-1"
            onChange={handleChange}
          >
            <option>All</option>
            <option>Open</option>
            <option>In-Progress</option>
            <option>Resolved</option>
          </select>
        </div>
      </div>
      {option == "All" ? (
        <Table data={issuesData} />
      ) : (
        <Table data={issuesData.filter((x) => x.status === option)} />
      )}
    </div>
  );
};

export default MainContainer;
