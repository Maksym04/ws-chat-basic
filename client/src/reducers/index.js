import { combineReducers } from 'redux';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  chat: messageReducer,
});

export default rootReducer;
