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

  ngOnInit(): void {
    this.getJobList();
  }

  getJobList() {
    return this.jobRouterService.getJobDetails().then(jobDetails => {
      this.jobListDetail = jobDetails;
    });
  }

  tableRowSelected(jobId: any) {
    this.router.navigate([`job/job-detail/${jobId}`]);
  }
}
