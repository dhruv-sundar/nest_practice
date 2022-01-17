import { Injectable } from '@nestjs/common';
import internal from 'stream';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Testing this';
  }

}