import { YOUCHOOSE } from "../constants";

const initialDate = "";

export default function(date = initialDate, action) {
  const { type } = action;
  switch (type) {
    case YOUCHOOSE:
      return (date = action.payload.date[0]);
    default:
      return date;
  }
}
