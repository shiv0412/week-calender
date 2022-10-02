import React from "react";
import ReactDOM from "react-dom";

import WeekCalendar from "./components/WeekSchedular";

const App = () => {
  return (
    <div style={{ backgroundColor: "#FBFCFC" }}>
      <WeekCalendar />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
