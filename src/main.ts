import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConsoleLogger, LogLevel } from '@nestjs/common';

const factoryOptions = {
  logger: new ConsoleLogger({
    json: process.env.NODE_ENV !== 'local',    
  })  
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, factoryOptions);

  if (process.env.NODE_ENV === 'local') {
    app.enableCors();
  }

  const config = new DocumentBuilder()
    .setTitle('Salas particulares')
    .setDescription('Api para gerenciar salas particulares e mentorias')
    .setVersion('1.0')
    .addTag('salas')
    .setExternalDoc('Insomnia Collection', 'docs-json')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(3000);
}
bootstrap();
