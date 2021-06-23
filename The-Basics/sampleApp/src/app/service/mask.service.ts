import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaskService {
  public static config = {loading: false};

  constructor() {
  }

  startLoading() {
    MaskService.config.loading = true;
  }

  endLoading() {
    MaskService.config.loading = false;
  }
}
