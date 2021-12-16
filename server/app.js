const express = require('express');
const cors = require('cors');
const { messageController } = require('./controllers');

const app = express();

app.use(cors());

app.get('/api/messages', messageController.getMessages);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  res.status(err?.status ?? 500).send({
    errors: [{ title: err?.message ?? 'Internal server error' }],
  });
});

module.exports = app;
