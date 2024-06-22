import "./App.scss";
import InputPanel from "./components/InputPanel";
import SubmitInput from "./components/SubmitInput";
import ShowPanel from "./components/ShowPanel";
import { useReducer } from "react";
import { INIT_STATE, formReducer } from "./formReducer";
import { FormContext } from "./FormContext";
import { intervalToDuration, set } from "date-fns";

function App() {
  const [state, dispatch] = useReducer(formReducer, INIT_STATE);
  const calAge = (birthYear, birthMonth, birthDay) => {
    const { years, months, days } = intervalToDuration({
      start: set(new Date(0), {
        year: birthYear,
        month: birthMonth - 1,
        day: birthDay,
      }),
      end: new Date(),
    });

    return { years, months, days };
  };

  return (
    <div className="App">
      <div className="container">
        <FormContext.Provider value={{ state, dispatch, calAge }}>
          <InputPanel />
          <SubmitInput />
          <ShowPanel />
        </FormContext.Provider>
      </div>
    </div>
  );
}

export default App;
