import React from "react";
import SelectPost from "./components/SelectPost/SelectPost";
import CalendarEditable from "./components/CalendarEditable/CalendarEditable";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="item">
          <SelectPost />
        </div>
        <div className="item">
          <CalendarEditable />
        </div>
      </div>
    );
  }
}

export default App;
