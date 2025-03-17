import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SalasService } from './salas.service';
import { SalasController } from './salas.controller';
import { Sala, SalaSchema } from './schemas/sala.schema';

@Module({
  controllers: [SalasController],
  providers: [SalasService],
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),        
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Sala.name, schema: SalaSchema }])
  ]
})
export class SalasModule {}
