import React from "react";
import styled from "styled-components";

import Button from "./Button";
import Dropdown from "./Dropdown";

const DateRangeContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;
const DateTitle = styled.h4`
  font-family: arial;
  color: #85929e;
  padding-right: 3.5%;
  font-weight: 13px;
  padding-top:5px;
`;

const RangeDisplay = (props) => {
  return (
    <>
      <DateRangeContainer>
        <Dropdown />
        <DateTitle>{props.weekStartDate + props.weekEndDate}</DateTitle>
        <Button prevWeekSelector={props.prevWeekSelector} nextWeekSelector={props.nextWeekSelector} />
      </DateRangeContainer>
    </>
  );
};

export default RangeDisplay;
