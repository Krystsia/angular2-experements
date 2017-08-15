import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validator, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveControl: FormControl;
  myValidator: ValidatorFn;

  constructor(fb: FormBuilder) {
    this.myValidator = (control) => {
      return control.value === 'kirill' ? null : { strange: 'Strange Name' };
    };

    this.reactiveControl = fb.control('kirill', this.myValidator);

    this.reactiveControl.valueChanges.subscribe(value => {
      console.log(this.reactiveControl);
    });
  }

  ngOnInit() {
    console.log(this.reactiveControl);
  }

  submitForm(form: any): void {
    console.log(form);
  }
}
