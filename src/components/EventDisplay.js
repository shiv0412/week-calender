import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getMyEventColor } from "./constants";

const EventContainer = styled.div`
  border-radius: 3px;
  background-color: ${(props) =>
    props.eventColor ? props.eventColor : "#F5B7B1"};
  height: 100%;
  border: 0.1px solid #fbfcfc;
`;
const Event = styled.div`
  padding: 10% 10% 10% 4%;
  overflow: hidden;
  font-family: arial;
  font-size: 12px;
  font-weight: bold;
  div:nth-child(1) {
    color: #6b6b6b;
    line-height: 20px;
    padding-left: 15px;
    font-size: 12px;
  }
  div:nth-child(2) {
    padding-top: 15px;
    padding-left: 15px;
  }
`;

const EventDisplay = (props) => {
  const eventColor = getMyEventColor(props.start.format("hh").toString());
  return (
    <>
      <EventContainer eventColor={eventColor}>
        <Event>
          <div>
            {props.eventTitle
              ? props.eventTitle
              : "Submit project for quality testing call"}
          </div>
          <div>
            {props.start.format("hh:mm A - ").toString()}
            {props.end.format("hh:mm A").toString()}
          </div>
        </Event>
      </EventContainer>
    </>
  );
};

EventDisplay.propTypes = {
  start: PropTypes.instanceOf(moment).isRequired,
  end: PropTypes.instanceOf(moment).isRequired,
};

export default EventDisplay;
