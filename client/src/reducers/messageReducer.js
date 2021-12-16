import produce from 'immer';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {};

const messageReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default messageReducer;
