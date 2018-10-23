import React from "react";
import SelectPost from "./components/SelectPost/SelectPost";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <SelectPost />
      </div>
    );
  }
}

export default App;
