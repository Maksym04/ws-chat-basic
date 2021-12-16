import ACTION_TYPES from './actionTypes';

// GET

export const getMessagesAction = () => ({
  type: ACTION_TYPES.GET_MESSAGES_ACTION,
});

export const getMessagesRequest = () => ({
  type: ACTION_TYPES.GET_MESSAGES_REQUEST,
});

export const getMessagesSuccess = data => ({
  type: ACTION_TYPES.GET_MESSAGES_SUCCESS,
  payload: data,
});

export const getMessagesError = error => ({
  type: ACTION_TYPES.GET_MESSAGES_ERROR,
  payload: error,
});

// CREATE

export const createMessageAction = data => ({
  type: ACTION_TYPES.CREATE_MESSAGE_ACTION,
  payload: data,
});

export const createMessageRequest = () => ({
  type: ACTION_TYPES.CREATE_MESSAGE_REQUEST,
});

export const createMessageSuccess = data => ({
  type: ACTION_TYPES.CREATE_MESSAGE_SUCCESS,
  payload: data,
});

export const createMessageError = error => ({
  type: ACTION_TYPES.CREATE_MESSAGE_ERROR,
  payload: error,
});
