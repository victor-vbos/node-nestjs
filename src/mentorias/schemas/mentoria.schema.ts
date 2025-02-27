import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MentoriaDocument = HydratedDocument<Mentoria>;

@Schema()
export class Mentoria {
  @Prop({ required: true })
  nome: string;

  @Prop({ type: [String], default: [] })
  datas_compra: string[];

  @Prop({ type: [String], default: [] })
  emails_excecao: string[];

  @Prop({ type: [Number], default: [] })
  planos_disponiveis: number[];

  @Prop({ type: [Types.ObjectId], ref: 'Sala', default: [] })
  salas: Types.ObjectId[];

  @Prop({ default: true })
  ativo: boolean;

  @Prop({ type: Date, default: Date.now })
  criado_em: Date;

  @Prop({ type: Date, default: Date.now })
  atualizado_em: Date;
}

export const MentoriaSchema = SchemaFactory.createForClass(Mentoria);
