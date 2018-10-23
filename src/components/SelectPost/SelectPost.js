import React from "react";
import "./SelectPost.scss";
import Crop from "../../components/Crop/Crop";

const SelectPost = props => {
  return (
    <div>
      <div>Добро пожаловать в ваш календарь постов!</div>
      <Crop />
    </div>
  );
};

export default SelectPost;
