import {Component, OnInit} from '@angular/core';
import {JobRouterService} from '../service/router.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent implements OnInit {
  jobModal: any = {};
  jobId: any;
  isAddMode: boolean;
  id: string;
  submitted = false;

  constructor(private jobRouterService: JobRouterService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.jobId = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.isAddMode = !this.jobId;

    if (!this.isAddMode) {
      this.getJobDetail();
    }
  }

  getJobDetail() {
    this.jobRouterService.getJobDetailById(this.jobId).then(data => {
      this.jobModal.title = data[0].title;
      this.jobModal.company = data[0].company;
      this.jobModal.place = data[0].place;
      this.jobModal.jobCreatedTime = data[0].jobCreatedTime;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.isAddMode) {
      this.createJob();
    } else {
      this.updateJob();
    }
  }

  createJob() {
    this.jobRouterService.addJob({
      id: this.jobRouterService.autoIncrementJobId(),
      title: this.jobModal.title,
      company: this.jobModal.company,
      place: this.jobModal.place,
      jobCreatedTime: this.jobModal.jobCreatedTime
    }).then(() => {
      this.router.navigate(['job']);
    }).then(() => {
      this.jobModal = '';
    });
  }

  updateJob() {
    this.jobRouterService.updateJob({
      id: this.jobId,
      title: this.jobModal.title,
      company: this.jobModal.company,
      place: this.jobModal.place,
      jobCreatedTime: this.jobModal.jobCreatedTime
    }).then(() => {
      this.router.navigate(['job']);
    });
  }
}
