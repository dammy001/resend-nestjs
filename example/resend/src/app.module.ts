import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResendModule, ResendService } from 'resend-nestjs';

@Module({
  imports: [ResendModule.register({ key: process.env.RESEND_ENV })],
  controllers: [AppController],
  providers: [AppService, ResendService],
})
export class AppModule {}
