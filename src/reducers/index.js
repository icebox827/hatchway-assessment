import { combineReducers } from "redux";
import studentReducer from "./studentsReducer";

const reducers = combineReducers({
  students: studentReducer
});

export default reducers;