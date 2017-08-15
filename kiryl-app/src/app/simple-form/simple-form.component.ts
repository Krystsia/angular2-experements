import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  private someInput: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.someInput.valueChanges.subscribe((value) => console.log(value));
  }

  submitForm(value: any) {
    console.log(value);
  }


}
