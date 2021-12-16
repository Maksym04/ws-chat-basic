const express = require('express');
const { messageController } = require('./controllers');

const app = express();

app.get('/api/messages', messageController.getMessages);

app.use((err, req, res, next) => {
  if (headersSent) {
    return;
  }
  res.status(err?.status ?? 500).send({
    errors: [{ title: err?.message ?? 'Internal server error' }],
  });
});

module.exports = app;
