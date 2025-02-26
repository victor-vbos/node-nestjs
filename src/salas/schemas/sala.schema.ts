
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SalaDocument = HydratedDocument<Sala>;

@Schema()
export class Sala {
    @Prop({ required: true })
    nome: string;
  
    @Prop({ required: true })
    ativo: boolean;
  
    @Prop({ required: true })
    is_mentoria: boolean;
  
    @Prop({ default: null })
    video?: number;
  
    @Prop({ required: true })
    data_inicio: Date;
  
    @Prop({ required: true })
    data_expiracao: Date;
  
    @Prop({ default: Date.now })
    criado_em: Date;
  
    @Prop({ default: Date.now })
    atualizado_em: Date;
  
    @Prop({
      type: [
        {
          id: { type: Number, required: true },
          nome: { type: String, required: true },
        },
      ],
      required: true,
    })
    professores: { id: number; nome: string }[];
  
    @Prop({
      type: [
        {
          id: { type: Number, required: true },
          nome: { type: String, required: true },
        },
      ],
      required: true,
    })
    coaches: { id: number; nome: string }[];
  
    @Prop({ required: true })
    url: string;
}

export const SalaSchema = SchemaFactory.createForClass(Sala);
