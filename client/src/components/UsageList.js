import React from "react";
import UsageItem from "./UsageItem";
import TeamsChart from "./TeamsChart";

function isEmptyObject(obj) {
  var name;
  for (name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false;
    }
  }
  return true;
}

const UsageList = ({ usage, chartData }) => {
  if (!isEmptyObject(usage)) {
    const renderedUsageList = usage.map((usage, index) => {
      return <UsageItem usage={usage} rank={index} key={usage + index} />;
    });
    return (
      <div>
        <TeamsChart chartData={chartData} />
        <div className="text-center">{renderedUsageList}</div>
      </div>
    );
  } else {
    return <div>No results found</div>;
  }
};

export default UsageList;
