import { Module } from '@nestjs/common';
import { SalasService } from './salas.service';
import { SalasController } from './salas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sala, SalaSchema } from './schemas/sala.schema';

@Module({
  controllers: [SalasController],
  providers: [SalasService],
  imports: [
    MongooseModule.forRoot('mongodb://root:example@mongo:27017'),
    MongooseModule.forFeature([{ name: Sala.name, schema: SalaSchema }])
  ]
})
export class SalasModule {}
