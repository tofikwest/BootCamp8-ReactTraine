import React from "react";
import data from "../../data";
import LapTopListItem from "../lapTopListItem/LapTopListItem";
const LapTopList = () => {
  return (
    <ul>
      {data.laptops.map((item) => (
        <LapTopListItem laptops={item} key={item} />
      ))}
    </ul>
  );
};

export default LapTopList;
