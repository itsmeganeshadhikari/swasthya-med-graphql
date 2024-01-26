import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type UpdatePhoneNumberDocument = UpdatePhoneNumber & mongoose.Document;

@Schema({ timestamps: true })
export class UpdatePhoneNumber {
  @Prop({ required: true, ref: 'User' })
  userId: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  dialCode: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  verificationCode: string;

  @Prop({ default: null })
  expiresAt: Date;

  @Prop({ default: 0 })
  expiresBy: number;
}

export const UpdatePhoneNumberSchema =
  SchemaFactory.createForClass(UpdatePhoneNumber);
