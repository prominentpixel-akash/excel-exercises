import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})

export class DirectivesComponent implements OnInit {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
    this.setFontColor('red');
  }

  defaultColor = 'green';

  colours = [
    {id: 1, colour: 'Red', text: 'RED'},
    {id: 2, colour: 'Green', text: 'GREEN'},
    {id: 3, colour: 'Yellow', text: 'YELLOW'},
    {id: 4, colour: 'Orange', text: 'ORANGE'},
    {id: 5, colour: 'Pink', text: 'PINK'}
  ];
  text: any;
  color: any;

  ngOnInit(): void {
  }

  setFontColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement, 'color', color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontColor('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontColor('red');
  }
}
