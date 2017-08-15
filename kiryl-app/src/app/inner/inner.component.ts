import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
