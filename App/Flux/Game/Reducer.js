import { createReducer } from '../Config';
import { SET_ANSWERS } from './Types';

const initialState = {
  answers: []
};

const setAnswers = (state = initialState, { payload }) => {
  return {
    ...state,
    answers: payload
  };
};

const descriptor = {
  [SET_ANSWERS]: setAnswers
};

export default createReducer(initialState, descriptor);
