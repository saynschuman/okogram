import React, { Component } from "react";
import { increment, decrement } from "../../actions";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={this.handleIncr}>increment me</button>
        <br />
        <button onClick={this.handleDecr}>decrement me</button>
      </div>
    );
  }
  handleIncr = () => {
    this.props.increment();
  };
  handleDecr = () => {
    this.props.decrement();
  };
}

export default connect(
  state => {
    return {
      counter: state.counter
    };
  },
  { increment, decrement }
)(Counter);
