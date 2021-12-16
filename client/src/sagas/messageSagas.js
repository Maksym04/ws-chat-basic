import { put } from 'redux-saga/effects';
import {
  createMessageError,
  createMessageRequest,
  getMessagesError,
  getMessagesRequest,
  getMessagesSuccess,
} from '../actions/actionCreators';
import * as API from './../api';

export function * getMessagesSaga (action) {
  yield put(getMessagesRequest());
  try {
    // {data:[]}
    const {
      data: { data: messages },
    } = yield API.getMessages();

    yield put(getMessagesSuccess(messages));
  } catch (err) {
    yield put(getMessagesError(err));
  }
}

export function * createMessageSaga (action) {
  const { payload } = action;

  yield put(createMessageRequest());
  try {
    yield API.createMessage(payload);
  } catch (err) {
    yield put(createMessageError(err));
  }
}
