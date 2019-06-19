import { combineReducers } from 'redux';

import UI from './UI/Reducer';
import Questions from './Questions/Reducer';
import Game from './Game/Reducer';

export default () =>
  combineReducers({
    ui: UI,
    questions: Questions,
    game: Game
  });
