import { DECREMENT, INCREMENT } from "../constants";

const initialCount = 1;

export default function(count_state = initialCount, action) {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return (count_state = count_state + 1);
    case DECREMENT:
      return (count_state = count_state - 1);
    default:
      return count_state;
  }
}
