import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})

export class DirectivesComponent implements OnInit {

  constructor() {
  }

  colours = [
    {id: 1, colour: 'Red', text: 'RED'},
    {id: 2, colour: 'Green', text: 'GREEN'},
    {id: 3, colour: 'Yellow', text: 'YELLOW'},
    {id: 4, colour: 'Orange', text: 'ORANGE'},
    {id: 5, colour: 'Pink', text: 'PINK'}
  ];

  ngOnInit(): void {
  }

}
