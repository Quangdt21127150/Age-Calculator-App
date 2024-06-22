import React, { useContext } from "react";
import { FormContext } from "../FormContext";

const ShowValue = ({ unit }) => {
  const { state } = useContext(FormContext);
  return (
    <div className="ShowValue">
      <span>{state.result[unit]}</span>
      <strong> {unit}s</strong>
    </div>
  );
};

export default ShowValue;
