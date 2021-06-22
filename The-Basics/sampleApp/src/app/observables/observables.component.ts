import {Component, OnInit} from '@angular/core';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    function arrayObservable(observer: Observer<string>) {
      const arrayOfString = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'];
      let timeoutId: any;

      arraySequence(arrayOfString, 0);

      function arraySequence(array: string[], arrayLength: number) {
        timeoutId = setTimeout(() => {
          observer.next(array[arrayLength]);
          if (arrayLength === 3) {
            observer.error('do not use it');
          } else if (arrayLength === array.length - 2) {
            observer.complete();
          } else {
            arraySequence(array, ++arrayLength);
          }
        }, 1500);
      }

      // Unsubscribe Stop execution
      return { unsubscribe() {clearTimeout(timeoutId);}};
    }

    // Create observable and passed to array
    const customObservable = new Observable(arrayObservable);
    customObservable.subscribe({
      next(data) {
        console.log('Input data is: ' + data);
      }, error(error) {
        console.log(error);
      }, complete() {
        console.log('It should complete the observable');
      }
    });
  }
}
