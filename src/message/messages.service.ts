import { Injectable } from "@nestjs/common";
import { MessageRepository } from "./messages.repository";
import { Message } from "./entity/message.entity";
import { EventsGateway } from "../events/events.gateway";

@Injectable()
export class MessageService {
  constructor(
    private readonly messageRepository: MessageRepository,
    private chatGateway: EventsGateway
  ) {}

  async createMessage(message: Message) {
    const createdMessage = await this.messageRepository.createMessage(message);
    this.chatGateway.sendMessage(createdMessage);
    return createdMessage;
  }
}
