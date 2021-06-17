import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {JobRouterService} from '../service/router.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
  providers: [JobRouterService]
})
export class JobListComponent implements OnInit {

  constructor(private router: Router, private jobRouterService: JobRouterService) {
  }

  jobListDetail: any;

  /*  jobArray: any = [
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
    ];*/

  ngOnInit(): void {
    this.getJobList();
  }

  getJobList() {
    return this.jobRouterService.getJobDetails().then(jobDetails => {
      this.jobListDetail = jobDetails;
    });
  }


  tableRowSelected(job: any) {
    this.router.navigate([`job/job-detail/${job.id}/${job.title}/${job.company}/${job.place}/${job.jobCreatedTime}`]);
  }

  editJobPost(job: any) {

  }
}
