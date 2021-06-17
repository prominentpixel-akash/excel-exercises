import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student-service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  studentList = [];
  subscription;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.subscription = this.studentService.getStudent().subscribe(
      (student) => {
        this.studentList.push(student);
      }, error => {
        console.log('Error', error);
      });
  }
}
