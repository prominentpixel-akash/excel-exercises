import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  readonly apiBaseUrl = environment.apiBaseUrl + '/api/user';
  readonly apiLocalhostUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public createUser(model: User): Observable<any> {
    return this.http.post(this.apiBaseUrl + '/create-user', model);
  }

  public getUsers(pageNumber: number, pageSize: number, sortColumn: string, sortOrder: string, searchTerm: string): Observable<any> {
    return this.http.get<any>(this.apiBaseUrl + `/get-all-users?pageNumber=${pageNumber}&pageSize=${pageSize}&sortColumn=${sortColumn}&sortOrder=${sortOrder}&searchTerm=${searchTerm}`);
  }

/*  public allUser() {
    return this.http.get<any>(this.apiBaseUrl + '/getAllUser');
  }*/

  public findUserById(id: any) {
    return this.http.get<any>(this.apiBaseUrl + `/${id}`);
  }

  public updateUser(user: any) {
    console.log('user', user);
    return this.http.put<User>(this.apiBaseUrl + '/update-user', user);
  }

  public deleteUserById(id: any) {
    return this.http.delete<any>(this.apiBaseUrl + `/delete-user/${id}`);
  }

  public login(requestBody): Observable<any> {
    const body = new URLSearchParams();
    const grantType = requestBody.grant_type = 'password';
    body.set('username', requestBody.email);
    body.set('password', requestBody.password);
    body.set('grant_type', grantType);
    const headers = {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic cHJvbWluZW50cGl4ZWw6c2VjcmV0'
    };
    return this.http.post(this.apiLocalhostUrl + `/oauth/token`, body.toString(), {headers});
  }
}
