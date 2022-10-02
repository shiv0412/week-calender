import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  text-align: right;
  padding: 15px 10px 0 0;
  button:nth-child(1) {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  button:nth-child(2) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
const WeekChangeButton = styled.button`
  background-color: #fbfcfc;
  border:2px solid #F4F6F7;
  padding: 5px 20px;
  color: #abb2b9;
  font-size:20px;
  :nth-child(1){
    border-right:none;
  }
`;

const Button = (props) => {
  return (
    <>
      <ButtonContainer>
        <WeekChangeButton onClick={props.prevWeek}>&lt;</WeekChangeButton>
        <WeekChangeButton onClick={props.nextWeek}>&gt;</WeekChangeButton>
      </ButtonContainer>
    </>
  );
};

export default Button;
