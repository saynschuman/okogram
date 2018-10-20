import BigCalendar from "react-big-calendar";
import React from "react";
import events from "./events";
import moment from "moment";
import "./Calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  render() {
    return (
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    );
  }
}

export default Calendar;
