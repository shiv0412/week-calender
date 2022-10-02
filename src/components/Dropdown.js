import React from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
padding:15px 5% 0 0;
`
const DropdownSelect = styled.select`
height:35px;
padding:0px 15px;
font-weight:bold;
color:#85929E;
border:2px solid #F4F6F7;
border-radius:5px;
background-color:#FBFCFC;
`;

const Dropdown = () => {
  return (
    <>
    <DropdownContainer>
      <DropdownSelect>
        <option>&#128197; Week</option>
        <option>&#128197; Month</option>
      </DropdownSelect>
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
