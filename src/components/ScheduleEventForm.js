import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import styled from "styled-components";

const SideBar = styled.div`
  position: absolute;
  z-index: 15;
  top: 0;
  right: 0;
  background-color: #ecf0f1;
  width: ${(props) => (props.isFormOpen ? "30%" : "0%")};
  height: 100vh;
  margin-botton: 5vh;
  transition: width 2s ease;
`;

const Label = styled.div`
  padding: 20px 0 10px 0;
  font-family: arial;
  font-size: 12px;
  color: #808b96;
  font-weight: bold;
`;
const FormikField = styled(Field)`
  padding: 15px 5px;
  outline: none;
  border: none;
  width: 98%;
  font-family: arial;
  font-size: 12px;
  color: #808b96;
  font-weight: bold;
`;

const FormTitle = styled.h3`
  text-align: center;
  font-family: arial;
  color: #808b96;
  padding-top: 15px;
`;

const FormContainer = styled.div`
  margin: auto;
  width: 60%;
  padding-top: 10%;
`;

const Button = styled.button`
  margin: 10% 0 0 35%;
  padding: 10px 20px;
  background-color: #1abc9c;
  border: none;
  font-family: arial;
  color: #fff;
  &:hover {
    background-color: #17a589;
    cursor: pointer;
  }
`;

const TimeFieldContainer = styled.div`
  display: flex;
  justifycontent: space-between;
  width: 100%;
`;

const FormikFieldTime = styled(Field)`
  padding: 15px 5px;
  outline: none;
  border: none;
  width: 50%;
  margin: 0 0 0 5px;
  font-family: arial;
  font-size: 12px;
  color: #808b96;
  font-weight: bold;

  ::placeholder {
    color: #abb2b9;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    color: #abb2b9;
  }

  ::-ms-input-placeholder {
    color: #abb2b9;
  }

  :nth-child(odd) {
    margin: 0px;
  }
`;

const CancelButton = styled.button`
  margin: 10% 0 0 35%;
  padding: 10px 20px;
  background-color: #f1948a;
  border: none;
  font-family: arial;
  color: #fff;
  &:hover {
    background-color: #f5b7b1;
    cursor: pointer;
  }
`;
const Note = styled.p`
  color: #808b96;
  padding-top: 5px;
  font-family: arial;
  font-size: 12px;
  line-height: 18px;
`;

const ScheduleEventForm = (props) => {
  const eventCurrentDate = props.eventDate;
  return (
    <>
      <SideBar isFormOpen={props.isFormOpen}>
        <FormTitle>Schedule My Event</FormTitle>
        <FormContainer>
          <Formik
            initialValues={{
              title: "",
              startHour: "",
              startMinute: "",
              endHour: "",
              endMinute: "",
              eventDate: eventCurrentDate,
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                props.handleFormClose(values, true);
              }, 400);
            }}
          >
            <Form>
              <Label>Title</Label>
              <FormikField type="text" name="title" required />
              <Label>Event Start</Label>
              <TimeFieldContainer>
                <FormikFieldTime
                  type="number"
                  name="startHour"
                  placeholder="HH"
                  required
                />
                <FormikFieldTime
                  type="number"
                  name="startMinute"
                  placeholder="MM"
                  required
                />
              </TimeFieldContainer>
              <Label>Event End</Label>
              <TimeFieldContainer>
                <FormikFieldTime
                  type="number"
                  name="endHour"
                  placeholder="HH"
                  required
                />
                <FormikFieldTime
                  type="number"
                  name="endMinute"
                  placeholder="MM"
                  required
                />
              </TimeFieldContainer>
              <Note>
                <b>Note:</b> please input event "hours" from 00-23 in HH format
                and "minutes" from 00-59 in MM format.
              </Note>
              <Button>&#9998; Create</Button>
              <CancelButton
                onClick={() => {
                  props.handleFormClose("", false);
                }}
              >
                &#9747; Cancel
              </CancelButton>
            </Form>
          </Formik>
        </FormContainer>
      </SideBar>
    </>
  );
};

export default ScheduleEventForm;
