import { Injectable } from '@angular/core';

@Injectable()
export class SecondService {
  getList() {
    return ['1', '2', '3', '4', '5'];
  }
}
