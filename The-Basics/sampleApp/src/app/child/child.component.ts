import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit {

  constructor() {
  }

  @Input() parentData;
  heading = 'Dummy Heading';

  ngOnChanges(): void {
    if (!(this.parentData === undefined)) {
      this.heading = this.parentData;
    }
  }

  ngOnInit(): void {
    this.getBackgroundColor();
  }

  getBackgroundColor() {
    return this.parentData === this.parentData ? this.parentData : '';
  }
}
