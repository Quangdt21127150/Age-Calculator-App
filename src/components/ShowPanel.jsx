import React from "react";
import ShowValue from "./ShowValue";

const ShowPanel = () => {
  return (
    <div className="ShowPanel">
      <ShowValue unit="year" />
      <ShowValue unit="month" />
      <ShowValue unit="day" />
    </div>
  );
};

export default ShowPanel;
