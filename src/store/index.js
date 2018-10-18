import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, {}, enhancer);

export default store;
