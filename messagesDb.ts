import { promises as fs } from 'fs';
import {IMessage, TMessageApi} from "./types";

const dir = './messages';

const messagesDb = {
  async getItems() {
    try {
      const files = await fs.readdir(dir);

      return await Promise.all(files.map(async (file) => {
        const message = await fs.readFile(`${dir}/${file}`);
        return JSON.parse(message.toString()) as IMessage;
      }));
    } catch (e) {
      console.error(e);
    }
  },
  async addItem(item: TMessageApi) {
    try {
      if (!item) return null;

      const datetime = new Date().toISOString();

      const message: IMessage = {
        message: item.message,
        datetime
      };

      await fs.writeFile(`${dir}/${datetime}.txt`, JSON.stringify(message));
      return message;
    } catch (e) {
      console.error(e);
    }
  }
};

export default messagesDb;