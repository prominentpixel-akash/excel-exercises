import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  submitted = false;
  constructor(private fb: FormBuilder) {
  }

  reactiveForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    company: ['', [Validators.required]],
    area: [],
    gender: [],
    isNewToCompany: [''],
    mobile: ['', [Validators.required, Validators.pattern(/^\+?\d{3}[- ]?\d{2}[- ]?\d{3}$/)]]
  });

  get getForm() {
    return this.reactiveForm.controls;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (!this.reactiveForm.valid) {
      return;
    }
    console.log(this.reactiveForm.value);
  }
}
