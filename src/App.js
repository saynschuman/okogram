import React from "react";
import Counter from "./components/counter";
import CalendarEditable from "./components/CalendarEditable/CalendarEditable";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <CalendarEditable />
      </div>
    );
  }
}

export default App;
