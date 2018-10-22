import React from "react";
import "./SelectPost.scss";
import { connect } from "react-redux";
import moment from "moment";
import Crop from "../../components/Crop/Crop";

const SelectPost = props => {
  const date = props.date;
  const choodenDate = moment(date);
  return (
    <div>
      <div>Добро пожаловать в ваш календарь постов!</div>
      <br />
      {props.date ? (
        <div>
          <div>Добавить историю на {choodenDate.format("MMMM DD YYYY")}</div>
          <br />
          <Crop />
        </div>
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
