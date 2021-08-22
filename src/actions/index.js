import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE
} from './action';

const baseURL = 'https://api.hatchways.io/assessment/students';

const fetchStudent = () => async (dispatch) => {
  dispatch({ type: FETCH_STUDENTS_REQUEST});

  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    dispatch({ type: FETCH_STUDENTS_SUCCESS, payload: data.students });
  } catch (error) {
    dispatch({ type: FETCH_STUDENTS_FAILURE, payload: error });
  }
};

export { fetchStudent };