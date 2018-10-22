import React from "react";
import BigCalendar from "react-big-calendar";
import events from "./events";
import { connect } from "react-redux";
import moment from "moment";
import "./Calendar.css";
import { youChoose } from "../../actions";

const propTypes = {};

class Selectable extends React.Component {
  state = {
    events: events
  };

  // handleSelect = ({ start }) => {
  //   const title = window.prompt("New Event name");
  //   if (title)
  //     this.setState({
  //       events: [
  //         ...this.state.events,
  //         {
  //           start,
  //           end,
  //           title
  //         }
  //       ]
  //     });
  //   console.log(start);
  // };

  render() {
    const localizer = BigCalendar.momentLocalizer(moment);
    return (
      <>
        <BigCalendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView={BigCalendar.Views.MONTH}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2018, 9, 22)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={selected => this.props.youChoose(selected.slots)}
        />
      </>
    );
  }
}

Selectable.propTypes = propTypes;

export default connect(
  null,
  { youChoose }
)(Selectable);
