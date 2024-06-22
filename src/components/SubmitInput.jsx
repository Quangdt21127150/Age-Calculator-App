import React, { useContext } from "react";
import { FormContext } from "../FormContext";

const SubmitInput = () => {
  const { state, dispatch, calAge } = useContext(FormContext);

  const checkError = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let isError = false;
    let error = { day: null, month: null, year: null };

    //Check leap year
    if (
      (state.inputValue.year % 4 === 0 && state.inputValue.year % 100 !== 0) ||
      state.inputValue.year % 400 === 0
    ) {
      dayInMonth[1] = 29;
    }

    //year
    if (currentYear - state.inputValue.year < 0) {
      isError = true;
      error = { ...error, year: "Must be in the past" };
    }

    //month
    if (
      state.inputValue.month > 12 ||
      state.inputValue.month < 1 ||
      (state.inputValue.year === currentYear &&
        state.inputValue.month > new Date().getMonth() + 1)
    ) {
      isError = true;
      error = { ...error, month: "Must be a valid month" };
    }

    //day
    console.log(state.inputValue.day);
    console.log(new Date().getDate());
    console.log(state.inputValue.day > new Date().getDate);
    if (
      state.inputValue.day > 31 ||
      state.inputValue.day < 1 ||
      (state.inputValue.year === currentYear &&
        state.inputValue.day > new Date().getDate())
    ) {
      isError = true;
      error = { ...error, day: "Must be a valid day" };
    }

    if (dayInMonth[state.inputValue.month - 1] < state.inputValue.day) {
      isError = true;
      error = { ...error, day: "Must be a valid date" };
    }
    if (!state.inputValue.day) {
      isError = true;
      error = { ...error, day: "This field is required" };
    }
    if (!state.inputValue.month) {
      isError = true;
      error = { ...error, month: "This field is required" };
    }
    if (!state.inputValue.year) {
      isError = true;
      error = { ...error, year: "This field is required" };
    }
    dispatch({
      type: "ERROR",
      payload: error,
    });
    return isError;
  };

  const handleSubmit = () => {
    if (checkError()) return dispatch({ type: "RESET" });
    const result = calAge(
      state.inputValue.year,
      state.inputValue.month,
      state.inputValue.day
    );

    dispatch({ type: "RESULT", payload: result });
  };

  return (
    <div className="SubmitInput">
      <div className="line"></div>
      <button onClick={handleSubmit} />
    </div>
  );
};

export default SubmitInput;
