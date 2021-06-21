import {Component, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  private firstSubscription: Subscription;
  constructor() {
  }

  ngOnInit(): void {
    this.firstSubscription = interval(1500).subscribe(count => {
      console.log(count);
    });
  }
}
