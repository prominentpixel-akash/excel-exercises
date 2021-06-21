import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JobRouterService} from '../service/router.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})

export class JobDetailsComponent implements OnInit {
  jobId: any;
  jobDetails: any;

  constructor(private router: ActivatedRoute, private jobRouterService: JobRouterService) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      this.jobId = param.id;
      this.getJobDetail();
    });
  }

  getJobDetail() {
    this.jobRouterService.getJobDetailById(this.jobId).then(data => {
      this.jobDetails = data;
    });
  }
}
