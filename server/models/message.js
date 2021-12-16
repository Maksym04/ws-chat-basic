const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    author: {
      type: String,
      match: /^[A-Z][a-z0-9]{2,20}$/,
    },
    body: {
      type: String,
      minlength: 1,
      maxlength: 200,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
