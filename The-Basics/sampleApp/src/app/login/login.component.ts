import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: any;
  schoolName: any;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.studentService.setStudent(this.name, this.schoolName);
    console.log('view insert data :::', this.studentService.getStudent());
    this.clearInput();
  }

  clearInput() {
    this.name = '';
    this.schoolName = '';
  }
}
