import apisauce from 'apisauce';

const _headers = [];

const create = (baseURL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean') => {
  const api = apisauce.create({
    baseURL,
    timeout: 20000,
    headers: _headers
  });

  const getQuestions = () => api.get();

  return {
    getQuestions
  };
};

export default {
  create
};
