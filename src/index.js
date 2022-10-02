/*library imports*/
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
/*custom imports*/
import WeekCalendar from "./components/WeekSchedular";

/*styled-components*/
const AppContainer = styled.div`
  background-color: #fbfcfc;
`;

const App = () => {
  return (
    <AppContainer>
      <WeekCalendar />
    </AppContainer>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
