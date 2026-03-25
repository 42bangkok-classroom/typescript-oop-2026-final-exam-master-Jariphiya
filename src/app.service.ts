import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/interfaces/response.interface';

@Injectable()
export class AppService {
  getHello(){
    return {
      service: 'purchase-api',
          version: '1.0.0',
    };
  }
}

