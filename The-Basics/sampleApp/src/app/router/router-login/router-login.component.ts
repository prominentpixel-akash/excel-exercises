import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-router-login',
  templateUrl: './router-login.component.html',
  styleUrls: ['./router-login.component.scss']
})
export class RouterLoginComponent implements OnInit {
  submitted = false;
  errorMessage: any;
  loginForm: FormGroup;
  username: any;
  password: any;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      return;
    }

    this.loginService.login(this.loginForm.value).subscribe(data => {
      console.log('Login Successfully ' + data);

      if (data) {
        this.router.navigate(['job']);
      } else {
        this.errorMessage = 'Please enter valid username and password';
      }
    });
  }
}
