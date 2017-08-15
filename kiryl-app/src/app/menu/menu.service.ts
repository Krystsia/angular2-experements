import { Injectable } from '@angular/core';

@Injectable()
export class SuperMenuService {
  getList() {
      return ['a', 'd', 'f', 'e', 'w'];
    }
}
