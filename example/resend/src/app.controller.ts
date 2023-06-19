import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResendService } from 'resend-nestjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly resendService: ResendService,
  ) {}

  @Get()
  sendEmail() {
    this.resendService.resend().emails.send({
      from: 'onboarding@resend.dev',
      to: 'damilareanjorin1@gmail.com',
      subject: 'Onboarding!',
      html: '<p>Onboarding</p>',
    });
  }
}
