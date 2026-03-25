import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello():{
    success: Boolean,
    data: {
      service: String,
      version: String
    },
    message: String
  }
  {return {
      success: true,
      data: {
        service: 'purchase-api',
        version: '1.0.0'
      },
      message: 'Hello NestJS'
    };
  }
}
