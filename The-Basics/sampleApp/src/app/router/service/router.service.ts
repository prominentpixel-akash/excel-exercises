import {Injectable} from '@angular/core';

const jobArray = [
  {
    id: 1,
    title: 'Java',
    company: 'ABC',
    place: 'Rajkot',
    jobCreatedTime: '17-06-2021'
  },
  {
    id: 2,
    title: 'PHP',
    company: 'DEF',
    place: 'Rajkot',
    jobCreatedTime: '10-06-2021'
  },
  {
    id: 3,
    title: 'Angular',
    company: 'XYZ',
    place: 'Rajkot',
    jobCreatedTime: '01-06-2021'
  }
];

@Injectable({
  providedIn: 'root'
})
export class JobRouterService {

  constructor() {
  }

  getJobDetails() {
    return new Promise(resolve => resolve(jobArray));
  }
}
