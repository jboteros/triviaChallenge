import { connect } from 'react-redux';
import Content from './Content';

import { setLoading } from '../../Flux/UI/Actions';
import { getQuestions } from '../../Flux/Questions/Actions';
import { setAnswers } from '../../Flux/Game/Actions';

const mapStateToProps = ({ ui, questions, game }) => {
  const { loading } = ui;
  const { answers } = game;
  return {
    loading,
    questions,
    answers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: (state) => dispatch(setLoading(state)),
    setAnswers: (state) => dispatch(setAnswers(state)),
    getQuestions: () => dispatch(getQuestions())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
