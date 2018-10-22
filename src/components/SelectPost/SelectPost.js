import React from "react";
import "./SelectPost.scss";
import { connect } from "react-redux";
import moment from "moment";

const SelectPost = props => {
  const date = props.date;
  var now = moment(date);
  return (
    <div>
      <div>Добро пожаловать в ваш календарь постов!</div>
      <br />
      {props.date ? (
        <div>{now.format("MMMM DD YYYY")}</div>
      ) : (
        <div>(Выберите дату)</div>
      )}
    </div>
  );
};

export default connect(state => {
  return {
    date: state.chooseDate
  };
})(SelectPost);
