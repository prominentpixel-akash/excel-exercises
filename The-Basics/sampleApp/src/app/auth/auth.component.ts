import {Component, OnInit} from '@angular/core';
import {MaskService} from '../service/mask.service';
import {InMemoryConstants} from '../common/Constant';
import {InMemoryCache} from '../in-memory-cache';
import {UserService} from '../service/user-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  email: any;
  password: any;
  signInModal: any = {};
  errMessage: string;

  constructor(private maskService: MaskService,
              private inMemoryCache: InMemoryCache,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.maskService.startLoading();
    this.userService.login(this.signInModal).subscribe(
      res => {
        this.inMemoryCache.setData(InMemoryConstants.TOKEN, res.access_token);
        console.log('get Token ::', res.access_token);
        this.router.navigate(['/manage-http-user']);
        this.maskService.endLoading();
      },
      errorResponse => {
        this.errMessage = errorResponse.error.error_description;
        if ('Bad credentials' == this.errMessage) {
          this.errMessage = 'Invalid Username or Password';
        }
        this.maskService.endLoading();
      });
  }
}
