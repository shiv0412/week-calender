import React from "react";
import styled from "styled-components";

import Button from "./Button";
import Dropdown from "./Dropdown";

const DateRangeContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;
const Date = styled.h4`
  font-family: arial;
  color: #85929e;
  padding-right: 3.5%;
  font-weight: 13px;
  padding-top: 5px;
`;

const DropdownAndNavigation = (props) => {
  return (
    <>
      <DateRangeContainer>
        <Dropdown />
        <Date>{props.weekStartDate + props.weekEndDate}</Date>
        <Button
          prevWeekSelector={props.prevWeekSelector}
          nextWeekSelector={props.nextWeekSelector}
        />
      </DateRangeContainer>
    </>
  );
};

export default DropdownAndNavigation;
