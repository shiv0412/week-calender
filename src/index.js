import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import WeekCalendar from "./components/WeekSchedular";

const AppContainer = styled.div`
background-color:#FBFCFC
`
const App = () => {
  return (
    <AppContainer>
      <WeekCalendar />
    </AppContainer>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
