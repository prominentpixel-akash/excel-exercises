import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private subject = new Subject();

  setStudent(name, schoolName) {
    this.subject.next(name);
    this.subject.next(schoolName);
  }

  getStudent() {
    return this.subject.asObservable();
  }
}
