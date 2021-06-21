import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() {
  }

  isUserLoggedIn: boolean = false;

  login(loginForm): Observable<boolean> {
    this.isUserLoggedIn = loginForm.username == 'admin' && loginForm.password == 'admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? 'true' : 'false');

    return of(this.isUserLoggedIn);
  }
}
