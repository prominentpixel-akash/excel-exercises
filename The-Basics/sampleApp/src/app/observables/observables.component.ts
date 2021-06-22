import {Component, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  stringArray = ['abcdefghi'];
  randomArray = this.stringArray[Math.floor(Math.random() * this.stringArray.length)];

  private firstSubscription: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    this.firstSubscription = interval(1500).subscribe(count => {
      console.log(count);
    });
  }
}
