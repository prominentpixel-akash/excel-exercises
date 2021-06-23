import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user-service';
import {ActivatedRoute, Router} from '@angular/router';
import {MaskService} from '../service/mask.service';

@Component({
  selector: 'app-http-request-create-user',
  templateUrl: './http-request-create-user.component.html',
  styleUrls: ['./http-request-create-user.component.scss']
})
export class HttpRequestCreateUserComponent implements OnInit {
  userModel: any = {};
  userId: any = this.activeRoute.snapshot.queryParamMap.get('id');
  submitted = false;

  constructor(private userService: UserService,
              private router: Router,
              private maskService: MaskService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadUser();
  }

  public loadUser() {
    this.maskService.startLoading();
    this.userService.findUserById(this.userId).subscribe(data => {
        this.userModel = data;
        this.maskService.endLoading();
      },
      error => {
        this.maskService.endLoading();
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userId != null) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  createUser() {
    this.maskService.startLoading();
    this.userService.createUser(this.userModel).subscribe(data => {
        this.userModel = data.data;
        this.router.navigate(['/manage-http-user']);
        this.maskService.endLoading();
      },
      error => {
        this.maskService.endLoading();
      });
  }

  updateUser() {
    this.maskService.startLoading();
    this.userService.updateUser(this.userModel).subscribe(data => {
        this.userModel = data;
        this.router.navigate(['/manage-http-user']);
        this.maskService.endLoading();
      },
      error => {
        this.maskService.endLoading();
      });
  }
}
