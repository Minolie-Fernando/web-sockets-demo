import { Message } from "../../message/entity/message.entity";

export interface ServerToClientEvents {
  newMessage: (payload: Message) => void;
}

export interface ClientToServerEvents {
  newMessage: (client: Message) => void;
}
