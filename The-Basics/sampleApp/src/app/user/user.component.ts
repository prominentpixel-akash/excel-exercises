import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() {
  }

  firstNames: string;
  familyNames: string;
  countries: string;

  @ViewChild('firstName') firstNameRef: ElementRef;
  @ViewChild('familyName') familyNameRef: ElementRef;
  @ViewChild('country') countryRef: ElementRef;

  ngOnInit(): void {
  }

  onSubmit() {
    this.firstNames = this.firstNameRef.nativeElement.value;
    this.familyNames = this.familyNameRef.nativeElement.value;
    this.countries = this.countryRef.nativeElement.value;
  }
}
