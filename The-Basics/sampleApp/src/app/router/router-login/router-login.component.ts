import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-router-login',
  templateUrl: './router-login.component.html',
  styleUrls: ['./router-login.component.scss']
})
export class RouterLoginComponent implements OnInit {
  loginModel: any = {};
  submitted = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginModel === undefined || this.loginModel === '') {
      return false;
    } else {
      if (this.loginModel.username == this.loginModel.password) {
        this.router.navigate(['job']);
      } else {
        console.log('Plese enter valid username and password');
        this.clearInputData();
      }
    }
  }

  clearInputData() {
    this.loginModel.username = '';
    this.loginModel.password = '';
  }
}
