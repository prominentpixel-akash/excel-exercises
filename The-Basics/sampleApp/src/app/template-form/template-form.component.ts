import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  submitted = false;
  employeeModal: any = {
    gender: []
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  gender = [
    {name: 'Male', id: 1},
    {name: 'Female', id: 2},
    {name: 'Other', id: 3},
  ];

  onChange(gender: string, isChecked: boolean) {
    if (isChecked) {
      this.employeeModal.gender.push(gender);
    }
  }

  onSubmit() {
    this.submitted = true;
    console.table(this.employeeModal);
    alert(JSON.stringify(this.employeeModal));
  }
}
