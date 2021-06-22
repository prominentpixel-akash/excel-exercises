import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipe-transform-output',
  templateUrl: './pipe-transform-output.component.html',
  styleUrls: ['./pipe-transform-output.component.scss']
})
export class PipeTransformOutputComponent implements OnInit {

  constructor() {
  }

  space = ' ';
  appendComma = ', ';

  // First Way
  result = 'this are the components'.replaceAll(this.space, this.appendComma);

  // Second way
  stringText = 'this are the components';

  // Third way
  // The regular expression literal /\s/g (note the g global flag) matches the space ' '.

  searchRegExp = /\s/g;
  replaceWith = ', ';

  usingReplace = 'this are the components'.replace(this.searchRegExp, this.replaceWith);

  ngOnInit(): void {
  }

}
