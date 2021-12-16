import produce from 'immer';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  messages: [],
  isFetching: false,
  error: null,
  limit: 40,
};

const messageReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    // REQUEST
    case ACTION_TYPES.GET_MESSAGES_REQUEST:
    case ACTION_TYPES.CREATE_MESSAGE_REQUEST: {
      // return { ...state, error: null, isFetching: true };
      // with immer
      return produce(state, draftState => {
        draftState.error = null;
        draftState.isFetching = true;
      });
    }

    // SUCCESS
    case ACTION_TYPES.GET_MESSAGES_SUCCESS: {
      const { payload: messages } = action;

      const newMessages = [...messages].reverse();

      return { ...state, messages: newMessages, isFetching: false };
    }
    case ACTION_TYPES.CREATE_MESSAGE_SUCCESS: {
      const { payload: newMessage } = action;
      const { messages, limit } = state;

      const newMessages = [...messages, newMessage];

      if (messages.length >= limit) {
        messages.shift();
      }

      return { ...state, messages: newMessages, isFetching: false };
    }

    // ERROR
    case ACTION_TYPES.GET_MESSAGES_ERROR:
    case ACTION_TYPES.CREATE_MESSAGE_ERROR: {
      const { payload } = action;

      // return { ...state, error: payload, isFetching: false };
      // with immer
      return produce(state, draftState => {
        draftState.isFetching = false;
        draftState.error = payload;
      });
    }
    default:
      return state;
  }
};

export default messageReducer;
