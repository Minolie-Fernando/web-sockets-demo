export class Message {
  // id: string;
  message: string;
  authorId: string;
  conversationId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
})
export class MessageEntity {
  @Prop({
    require: true,
    type: String,
  })
  message: String;

  @Prop({
    require: true,
    type: String,
  })
  authorId: String;

  @Prop({
    require: true,
    type: String,
  })
  conversationId: String;

  @Prop({
    require: true,
    type: Date,
  })
  createdAt: Date;

  @Prop({
    require: true,
    type: Date,
  })
  updatedAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(MessageEntity);
