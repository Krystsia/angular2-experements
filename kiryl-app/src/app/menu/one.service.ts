import { Injectable } from '@angular/core';

@Injectable()
export class OneService {
  getList() {
    return ['1', '2', '3', '4', '5'];
  }
}

