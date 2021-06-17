import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})

export class JobDetailsComponent implements OnInit {
  jobId: any;
  jobTitle: any;
  jobCompany: any;
  jobPlace: any;
  jobCreatedTime: any;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      this.jobId = param.id;
      this.jobTitle = param.title;
      this.jobCompany = param.company;
      this.jobPlace = param.place;
      this.jobCreatedTime = param.jobCreatedTime;
    });
  }
}
