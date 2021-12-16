const { Message } = require('../models');

module.exports.getMessages = async (req, res, next) => {
  try {
    const foundMessages = Message.find()
      .limit(40)
      .sort({ createdAt: -1 });
    res.status(200).send({ data: foundMessages });
  } catch (err) {
    next(err);
  }
};
