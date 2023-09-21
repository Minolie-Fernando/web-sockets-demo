import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Message, MessageEntity } from "./entity/message.entity";
import mongoose, { Model, ObjectId } from "mongoose";

@Injectable()
export class MessageRepository {
  constructor(
    @InjectModel(MessageEntity.name) private messageModel: Model<MessageEntity>
  ) {}

  async createMessage(message: Message) {
    const newMessage = new this.messageModel(message);
    const savedTutorLeadInDB = await newMessage.save();
    return savedTutorLeadInDB as unknown as Message;
  }
}
