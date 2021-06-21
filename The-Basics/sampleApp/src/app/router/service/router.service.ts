import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    title: 'Angular',
    company: 'Xyz',
    place: 'Baroda',
    jobCreatedTime: '01-06-2021'
  }
];

@Injectable({
  providedIn: 'root'
})
export class JobRouterService {

  constructor() {
  }

  autoIncrementJobId() {
    return jobArray.length + 1;
  }

  getJobDetails() {
    return new Promise(resolve => resolve(jobArray));
  }

  getJobDetailById(id) {
    const jobObj = jobArray.filter(function(job) {
      return job.id == id;
    });
    return new Promise(resolve => resolve(jobObj));
  }

  addJob(data) {
    return new Promise(resolve => {
      jobArray.push(data);
      resolve(data);
    });
  }

  updateJob(data) {
    const index = jobArray.findIndex(job => job.id == data.id);
    if (index > -1) {
      jobArray[index] = data;
    } else {
      jobArray.push(data);
    }
    return new Promise(resolve => resolve());
  }
}
