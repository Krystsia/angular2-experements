import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit {
  @Input() title: string;
  private showModal: boolean = false;
  private modalData: string = 'Start';

  constructor() {}

  ngOnInit() {
    this.getDataForModal();
  }

  onSubmit(value: any): void {
    this.showModal = !this.showModal;
  }

  getDataForModal() {
    setInterval(() => {
      this.modalData =  `Hello ${Math.random().toFixed(4)}`;
    }, 2000);
  }
}
