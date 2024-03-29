import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

 @Prop({
    required: true,
    enum: ['admin', 'superAdmin', 'editor','user'],
    default: 'user',
  })
  role: string;

  @Prop()
  phone: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
