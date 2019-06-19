import { SET_ANSWERS } from './Types';

export const setAnswers = (state) => (dispatch) => {
  dispatch({ type: SET_ANSWERS, payload: state });
};
