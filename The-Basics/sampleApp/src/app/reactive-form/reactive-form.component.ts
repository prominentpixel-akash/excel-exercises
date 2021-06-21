import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  submitted = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  employeeForm: FormGroup = this.fb.group({
    // Allow Alphabet and First Letter Capital in both words
    name: ['', [Validators.required, Validators.pattern(/^\s*[A-Z][a-z]+(\s?$|\s{1,}[A-Z][a-z])/)]],

    company: ['', [Validators.required]],  // /^[A-Z][a-z]. *$/
    area: ['', [Validators.required]], // [A-Za-z]+(\s[A-Za-z]+)?
    isNewToCompany: [''],
    mobile: ['', [Validators.required, Validators.pattern(/^\+?\d{3}[- ]?\d{2}[- ]?\d{3}$/)]],
    gender: this.fb.array([])
  });

  genderData: Array<any> = [
    {name: 'Male', value: 'Male'},
    {name: 'Female', value: 'FeMale'},
    {name: 'Other', value: 'Other'}
  ];

  get getForm() {
    return this.employeeForm.controls;
  }

  onCheckboxChange(e) {
    const gender: FormArray = this.employeeForm.get('gender') as FormArray;

    if (e.target.checked) {
      gender.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      gender.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          gender.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return;
    }
    console.log(this.employeeForm.value);
  }
}
