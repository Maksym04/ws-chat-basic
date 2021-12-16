const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');
const { Message } = require('./models');

const PORT = 5000;

const httpServer = http.createServer(app);

const ioOptions = { cors: { origin: 'http://localhost:3000' } };

const io = new Server(httpServer, ioOptions);

const SOCKET_EVENTS = {
  NEW_MESSAGE: 'NEW_MESSAGE',
  NEW_MESSAGE_ERROR: 'NEW_MESSAGE_ERROR',
};

// on - прослушивает событие, принимает обработчик
// emit - генерация событияб шлет данные

io.on('connect', socket => {
  console.log(`user is connected`);
  //Message
  socket.on(SOCKET_EVENTS.NEW_MESSAGE, async value => {
    try {
      const messInstance = new Message(value);
      const createdMessage = await messInstance.save();
      io.emit(SOCKET_EVENTS.NEW_MESSAGE, createdMessage);
    } catch (err) {
      socket.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR, err);
    }
  });

  socket.on('disconnect', () => {
    console.log(`user is disconnected`);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running!`);
});
