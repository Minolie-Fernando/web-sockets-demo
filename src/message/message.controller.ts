import { Body, Controller, Post } from "@nestjs/common";
import { MessageService } from "./messages.service";
import { Message } from "./entity/message.entity";

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post("send")
  async sendMessage(@Body() message: Message) {
    return await this.messageService.createMessage(message);
  }
}
