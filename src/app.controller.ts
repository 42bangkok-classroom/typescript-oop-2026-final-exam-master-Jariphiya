import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello():{
    success: Boolean,
    data: {
      service: String,
      version: String
    },
    message: String
  }{
  return this.appService.getHello();
  }
  
}

