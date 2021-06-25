import {Injectable} from '@angular/core';
import {InMemoryConstants} from './common/Constant';
import {User} from './model/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryCache {

  private data = {};

  constructor() {
    this.data = JSON.parse(sessionStorage.getItem(InMemoryConstants.ALL_DATA)) || {};
  }

  getData(key: string) {
    return this.data[key];
  }

  setData(key: string, value: any) {
    this.data[key] = value;
    this.save();
  }

  save() {
    sessionStorage.setItem(InMemoryConstants.ALL_DATA, JSON.stringify(this.data));
  }

  getUser(): any {
    return this.getData(InMemoryConstants.USER_DETAILS);
  }

  setUser(user: User) {
    this.setData(InMemoryConstants.USER_DETAILS, user);
  }
}
