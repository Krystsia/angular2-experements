import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-header-copy',
  templateUrl: './header-copy.component.html',
  styleUrls: ['./header-copy.component.css']
})
export class HeaderCopyComponent extends HeaderComponent  {

  constructor() {
    super();
  }

}
