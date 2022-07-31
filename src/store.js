import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./redux/reducers/todosReducer";

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;
