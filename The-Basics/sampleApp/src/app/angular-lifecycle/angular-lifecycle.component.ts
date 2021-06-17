import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-angular-lifecycle',
  templateUrl: './angular-lifecycle.component.html',
  styleUrls: ['./angular-lifecycle.component.scss']
})
export class AngularLifecycleComponent implements OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  @ViewChild('nameInput') input;
  data = 100;

  constructor() {
    console.log(`new - data is ${this.data}`);
    console.log('1. on changes called');
  }

  // Called after a bound input property changes
  // Your class gets initialized and the component is created the ngOnChanges() is called
  ngOnChanges(): void {
    console.log('on ngOnChanges is called');
  }

  // Called once the component is initialized
  ngOnInit(): void {
    console.log(`ngOnInit  - data is ${this.data}`);
    console.log('2. on init is called');
  }

  // Called during every change detection run
  //  It is called during every change detection run
  ngDoCheck(): void {
    console.log('3. ngDoCheck');
  }

  // Called after content (ng-content) has been projected into view
  ngAfterContentInit(): void {
    console.log('4. after content init called');
  }

  // Called every time the projected content has been checked
  ngAfterContentChecked(): void {
    console.log('5. after content check called');
  }

  // Called after the component’s view (and child views) has been initialized
  ngAfterViewInit(): void {
    console.log('6. after view init called');
    console.log('Name Input ::- ', this.input.nativeElement.value);
  }

  // Called every time the view (and child views) have been checked
  ngAfterViewChecked(): void {
    console.log('7. after view init checked');
  }

  // Called once the component is about to be destroyed
  ngOnDestroy(): void {
    console.log('8. on destroy called');
  }

  fnAddNumber(): void {
    this.data += 100;
  }

  deleteNumber(): void {
    this.data -= 10;
  }
}
