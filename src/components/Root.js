import React from "react";
import App from "../App";
import store from "../store";
import { Provider } from "react-redux";

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
