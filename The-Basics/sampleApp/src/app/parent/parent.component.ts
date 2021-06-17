import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() {
  }

  selectedColor: any;

  colors = [
    {id: 1, name: 'Red'},
    {id: 2, name: 'Green'},
    {id: 3, name: 'Yellow'},
    {id: 4, name: 'Orange'},
    {id: 5, name: 'Pink'}
  ];

  ngOnInit(): void {
  }

  onChange(value: any) {
    this.selectedColor = value;
  }
}
