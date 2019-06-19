import { GET_QUESTIONS } from './Types';
import apisauce from 'apisauce';

export const getQuestions = (type) => (dispatch) => {
  const api = apisauce.create({
    baseURL: `https://opentdb.com/api.php?amount=10&type=${type}`,
    timeout: 20000
  });

  return api.get().then((result) => {
    const questions = result.data.results.map((item) => {
      return new Promise((resolve) => {
        data = shuffle([...item.incorrect_answers, item.correct_answer]);

        resolve({
          ...item,
          answers: data
        });
      });
    });

    Promise.all(questions).then((response) => {
      return dispatch({ type: GET_QUESTIONS, payload: response });
    });
  });
};

export function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
