import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Socket } from "socket.io";
import { ClientToServerEvents, ServerToClientEvents } from "./types/events";
import { Message } from "../message/entity/message.entity";

@WebSocketGateway({ namespace: "chat" })
export class EventsGateway {
  @WebSocketServer()
  server: Socket<ClientToServerEvents, ServerToClientEvents>;

  @SubscribeMessage("message")
  handleMessage(client: Socket, payload: Message): string {
    return "Hello world!";
  }

  sendMessage(message: Message) {
    this.server.emit("newMessage", message);
  }
}
