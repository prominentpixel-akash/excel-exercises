import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})

export class DirectivesComponent implements OnInit {

  constructor() {
  }

  customDirective = [{colour: 'red', text: 'RED'},
    {colour: 'green', text: 'GREEN'},
    {colour: 'blue', text: 'BLUE'},
    {colour: 'yellow', text: 'YELLOW'}];

  ngOnInit(): void {
  }

}
