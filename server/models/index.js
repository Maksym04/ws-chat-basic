const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/chat-db')
  .then(() => console.log(`Connection to mongodb OK`))
  .catch(err => {
    console.log(`err`, err);
  });

module.exports.Message = require('./message');
