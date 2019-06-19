import { createReducer } from '../Config';
import { GET_QUESTIONS } from './Types';

const initialState = {
  questions: []
};

const getQuestions = (state = initialState, { payload }) => {
  // console.log('payload:Reducer', payload);
  return {
    ...state,
    questions: payload
  };
};

const descriptor = {
  [GET_QUESTIONS]: getQuestions
};

export default createReducer(initialState, descriptor);
