import axios from 'axios';
import { io } from 'socket.io-client';
import {
  createMessageError,
  createMessageSuccess,
} from '../actions/actionCreators';
import store from './../store';

const axiosOptions = {
  baseURL: 'http://localhost:5000/api',
};

const http = axios.create(axiosOptions);

// http://localhost:5000/api/messages
export const getMessages = () => http.get('./messages');
// {data: {data:[]}, meta:{}, ...}

const socket = io('ws://localhost:5000');

const SOCKET_EVENTS = {
  NEW_MESSAGE: 'NEW_MESSAGE',
  NEW_MESSAGE_ERROR: 'NEW_MESSAGE_ERROR',
};

export const createMessage = data => {
  socket.emit(SOCKET_EVENTS.NEW_MESSAGE, data);
};

socket.on(SOCKET_EVENTS.NEW_MESSAGE, newMessage => {
  store.dispatch(createMessageSuccess(newMessage));
});

socket.on(SOCKET_EVENTS.NEW_MESSAGE_ERROR, error => {
  store.dispatch(createMessageError(error));
});
