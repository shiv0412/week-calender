/*library imports*/
import React, { PureComponent } from "react";
import WeekCalendar from "react-week-calendar/src/WeekCalendar";
import moment from "moment";
import styled from "styled-components";
import "react-week-calendar/src/style.css";
/*custom imports*/
import EventComponent from "./EventDisplay";
import ScheduleEventForm from "./ScheduleEventForm";
import RangeDisplay from "./RangeDisplay";

/*styled-components*/
const Title = styled.h2`
  color: #273746;
  display: inline-block;
  width: 50%;
  padding-left: 15px;
  font-family: arial;
`;
const HeaderContainer = styled.div`
  display: flex;
`;
const WeekCalendarConatiner = styled.div`
  padding: 10px 10px 0 10px;
  height: 85vh;
`;

const scheduledEvents = [];

class WeekSchedluar extends PureComponent {
  state = {
    startDate: moment().weekday(0),
    endDate: moment().weekday(6),
    firstDay: moment().weekday(0),
    selectedIntervals: scheduledEvents,
    isFormOpen: false,
    eventDate: null,
    eventTitle: null,
    startTime: moment().hour(0),
    endTime: moment().hour(23),
  };

  goToNextWeek = () => {
    this.setState({
      firstDay: this.state.firstDay.clone().add(7, "days"),
      startDate: this.state.startDate.clone().add(7, "days"),
      endDate: this.state.endDate.clone().add(7, "days"),
    });
  };

  goToPrevWeek = () => {
    this.setState({
      firstDay: this.state.firstDay.clone().subtract(7, "days"),
      startDate: this.state.startDate.clone().subtract(7, "days"),
      endDate: this.state.endDate.clone().subtract(7, "days"),
    });
  };

  formHandler = (moment) => {
    this.setState({ isFormOpen: true, eventDate: moment.format("YYYY-MM-DD") });
  };

  checkEventConflict = (newEvent) => {
    const newEventStartTime = newEvent.start._d.toString().substr(0, 21);
    const newEventEndTime = newEvent.end._d.toString().substr(0, 21);
    let isEventConflictExist = false;
    scheduledEvents.forEach((event) => {
      if (
        event.start._d.toString().substr(0, 21) === newEventStartTime &&
        event.end._d.toString().substr(0, 21) === newEventEndTime
      ) {
        isEventConflictExist = true;
      }
    });
    if (isEventConflictExist === true) {
      alert(
        "Hi user, you have scheduled more then one event for same time duration"
      );
    }
  };

  handleFormClose = (values, isSubmit) => {
    if (isSubmit) {
      const todayDate = moment().format("YYYY-MM-DD");
      const selectedEventDate = values.eventDate;
      const daysDiffernce = moment(selectedEventDate).diff(
        moment(todayDate),
        "days"
      );
      if (daysDiffernce < 0) {
        const newEvent = {
          start: moment()
            .subtract(Math.abs(daysDiffernce), "days")
            .hour(values.startHour)
            .minute(values.startMinute),
          end: moment()
            .subtract(Math.abs(daysDiffernce), "days")
            .hour(values.endHour)
            .minute(values.endMinute),
        };
        this.checkEventConflict(newEvent);
        scheduledEvents.push(newEvent);
      } else {
        const newEvent = {
          start: moment()
            .add(daysDiffernce, "days")
            .hour(values.startHour)
            .minute(values.startMinute),
          end: moment()
            .add(daysDiffernce, "days")
            .hour(values.endHour)
            .minute(values.endMinute),
        };
        this.checkEventConflict(newEvent);
        scheduledEvents.push(newEvent);
      }
      this.setState({
        isFormOpen: false,
        eventTitle: values.title,
      });
    } else {
      this.setState({
        isFormOpen: false,
      });
    }
  };

  render() {
    return (
      <>
        <HeaderContainer>
          <Title>Timeline</Title>
          <RangeDisplay
            startDate={this.state.startDate.format("DD  - ").toString()}
            endDate={this.state.endDate.format("DD MMMM, yy").toString()}
            prevWeek={this.goToPrevWeek}
            nextWeek={this.goToNextWeek}
          />
        </HeaderContainer>
        <WeekCalendarConatiner>
          <WeekCalendar
            firstDay={this.state.firstDay}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            scaleUnit={60}
            eventSpacing={0}
            selectedIntervals={this.state.selectedIntervals}
            eventComponent={EventComponent}
            eventTitle={this.state.eventTitle}
            useModal={false}
            cellHeight={100}
            formHandler={this.formHandler}
          />
        </WeekCalendarConatiner>
        {this.state.isFormOpen && (
          <ScheduleEventForm
            isFormOpen={this.state.isFormOpen}
            handleFormClose={this.handleFormClose}
            eventDate={this.state.eventDate}
          />
        )}
      </>
    );
  }
}

export default WeekSchedluar;
