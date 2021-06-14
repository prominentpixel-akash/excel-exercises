import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blank-array',
  templateUrl: './blank-array.component.html',
  styleUrls: ['./blank-array.component.scss']
})
export class BlankArrayComponent implements OnInit {

  constructor() {
  }

  array = [];
  inputText: any;

  ngOnInit(): void {
  }

  onSubmit() {
    this.array.push(this.inputText);
    console.log('Array value in console ::- ', this.array);
  }
}
