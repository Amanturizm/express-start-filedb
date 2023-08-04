import express from 'express';
import messagesDb from "../messagesDb";

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const messages = await messagesDb.getItems();
  if (!messages) return null;

  const result = messages.slice(messages.length > 5 ? messages.length - 5 : 0, messages.length);
  res.send(result);
});

messagesRouter.post('/', async (req, res) => {
  const message = await messagesDb.addItem(req.body);
  res.send(message);
});

export default messagesRouter;