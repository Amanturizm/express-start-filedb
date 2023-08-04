export interface IMessage {
  message: string;
  datetime: string;
}

export type TMessageApi = Omit<IMessage, 'datetime'>;