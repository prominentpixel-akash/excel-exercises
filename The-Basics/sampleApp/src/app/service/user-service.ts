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

  constructor(private http: HttpClient) {
  }

  public createUser(model: User): Observable<any> {
    return this.http.post(this.apiBaseUrl + '/createUser', model);
  }

  public getUsers(pageNumber: number, pageSize: number, sortColumn: string, sortOrder: string, searchTerm: string): Observable<any> {
    return this.http.get<any>(this.apiBaseUrl + `/getAllUsers?pageNumber=${pageNumber}&pageSize=${pageSize}&sortColumn=${sortColumn}&sortOrder=${sortOrder}&searchTerm=${searchTerm}`);
  }

  public allUser() {
    return this.http.get<any>(this.apiBaseUrl + '/getAllUser');
  }

  public findUserById(id: any) {
    return this.http.get<any>(this.apiBaseUrl + `/${id}`);
  }

  public updateUser(user: any) {
    console.log('user', user);
    return this.http.put<User>(this.apiBaseUrl + '/updateUser', user);
  }

  public deleteUserById(id: any) {
    return this.http.delete<any>(this.apiBaseUrl + `/deleteUser/${id}`);
  }
}
