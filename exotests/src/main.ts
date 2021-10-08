import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import express, { Response } from 'express';
import path from 'path/posix';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.get("/", (req, res: Response)=>{
   return  res.sendFile(path.join(__dirname),'../exercice_front/build/index.html')
  })
  await app.listen(3000);
}
bootstrap();
