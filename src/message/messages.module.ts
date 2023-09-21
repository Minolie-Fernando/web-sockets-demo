import { Module } from "@nestjs/common";
import { MessageService } from "./messages.service";
import { MessageRepository } from "./messages.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { MessageEntity, MessageSchema } from "./entity/message.entity";
import { MessageController } from "./message.controller";
import { EventsModule } from "../events/events.module";

@Module({
  controllers: [MessageController],
  providers: [MessageService, MessageRepository],
  imports: [
    MongooseModule.forFeature([
      { name: MessageEntity.name, schema: MessageSchema },
    ]),
    EventsModule,
  ],
  exports: [MessageService],
})
export class MessagesModule {}
