import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  text-align: right;
  padding: 15px 10px 0 0;
`;
const WeekChangeButton = styled.button`
  background-color: #fbfcfc;
  border: 2px solid #f4f6f7;
  padding: 5px 20px;
  color: #abb2b9;
  font-size: 20px;
  :nth-child(1) {
    border-right: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  :nth-child(2) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Button = (props) => {
  return (
    <>
      <ButtonContainer>
        <WeekChangeButton onClick={props.prevWeekSelector}>
          &lt;
        </WeekChangeButton>
        <WeekChangeButton onClick={props.nextWeekSelector}>
          &gt;
        </WeekChangeButton>
      </ButtonContainer>
    </>
  );
};

export default Button;
