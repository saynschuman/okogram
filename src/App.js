import React from "react";
import Counter from "./components/counter";
import Calendar from "./components/Calendar/Calendar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <Calendar />
      </div>
    );
  }
}

export default App;
