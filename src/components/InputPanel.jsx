import React from "react";
import InputField from "./InputField";

const InputPanel = () => {
  return (
    <div className="InputPanel">
      <InputField name="day" />
      <InputField name="month" />
      <InputField name="year" />
    </div>
  );
};

export default InputPanel;
