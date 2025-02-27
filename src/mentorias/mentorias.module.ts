import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MentoriasService } from './mentorias.service';
import { MentoriasController } from './mentorias.controller';
import { Mentoria, MentoriaSchema } from './schemas/mentoria.schema';

@Module({
  controllers: [MentoriasController],
  providers: [MentoriasService],
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Mentoria.name, schema: MentoriaSchema }])
  ]
})
export class MentoriasModule {}
