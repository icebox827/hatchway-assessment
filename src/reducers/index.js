import { combineReducers } from "redux";
import studentReducer from "./studentsReducer";

const reducers = combineReducers({
  student: studentReducer
});

export default reducers;