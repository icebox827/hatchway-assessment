import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE
} from '../actions/action';

const INITIAL_STATE = {
  student: [],
  loading: false,
  error: null,
};

const studentReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading = true,
        error: null,
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        loading = false,
        student = action.payload,
      };
    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        loading = false,
        error = action.payload,
      }
    default:
      return state;
  }
};

export default studentReducer;
