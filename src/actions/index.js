import { DECREMENT, INCREMENT, YOUCHOOSE } from "../constants";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function youChoose(date) {
  return {
    type: YOUCHOOSE,
    payload: {
      date
    }
  };
}
