import express from 'express';
import messagesRouter from "./routers/messagesRouter";

const app = express();
const port = 8000;

app.use(express.json());
app.use('/messages', messagesRouter);

app.get('*', (_, res) => res.sendStatus(404));

app.listen(port, () => console.log(`Server running at ${port} port...`));