export const INIT_STATE = {
  inputValue: { day: "", month: "", year: "" },
  error: {
    day: null,
    month: null,
    year: null,
  },
  result: {
    day: "--",
    month: "--",
    year: "--",
  },
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "DD":
      return {
        ...state,
        inputValue: { ...state.inputValue, day: action.payload },
      };
    case "MM":
      return {
        ...state,
        inputValue: {
          ...state.inputValue,
          month: action.payload,
        },
      };
    case "YYYY":
      return {
        ...state,
        inputValue: {
          ...state.inputValue,
          year: action.payload,
        },
      };
    case "ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          ...action.payload,
        },
      };
    case "RESULT":
      return {
        ...state,
        result: {
          day: action.payload.days,
          month: action.payload.months,
          year: action.payload.years,
        },
      };
    case "RESET":
      return {
        ...state,
        result: {
          day: "--",
          month: "--",
          year: "--",
        },
      };
  }
};
