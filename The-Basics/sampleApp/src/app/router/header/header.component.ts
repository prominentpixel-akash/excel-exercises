import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  isUserLoggedIn = false;
  errorMessage: any;

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['router-login']);
  }

  onJobs() {
    const storeData = localStorage.getItem('isUserLoggedIn');
    if (storeData != null && storeData == 'true') {
      this.isUserLoggedIn = true;
      this.router.navigate(['job-list']);
    } else {
      this.isUserLoggedIn = false;
      this.errorMessage = 'You are not authorized';
    }
  }
}
