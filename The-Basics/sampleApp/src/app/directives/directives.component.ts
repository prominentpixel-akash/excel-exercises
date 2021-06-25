import {Component, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {Fruit} from '../model/fruit';
import {FRUITS} from '../common/Constant';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})

export class DirectivesComponent implements OnInit {
  @Input() defaultValue: any;
  @Input() color: string;
  @Input() size: string;

  fruits = FRUITS;
  selectedFruits: Fruit;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    renderer2.setStyle(elementRef.nativeElement, 'color', 'pink');
    elementRef.nativeElement.style.fontSize = '20px';

    this.elementRef.nativeElement.value = this.defaultValue;
    console.log('Input Value :::', this.defaultValue);
  }

  ngOnInit(): void {
    /*    const newText = this.renderer2.createText('world !');
        this.renderer2.appendChild(this.elementRef.nativeElement, newText);*/
  }

  onSelect(fruit: Fruit): void{
    this.selectedFruits = fruit;
  }

  // Listen for keyup event and change background color
  @HostListener('keyup') onkeyup() {
    const count = this.elementRef.nativeElement.value;
    console.log(this.elementRef.nativeElement.value);
    if (count < 5) {
      this.elementRef.nativeElement.style.backgroundColor = 'red';
    } else if (count >= 5 && count <= 10) {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    } else if (count > 10) {
      this.elementRef.nativeElement.style.backgroundColor = 'purple';
    }
  }

  @HostListener('mouseover') onMouseOver() {
    this.changeColor('red');
    this.elementRef.nativeElement.style.fontSize = '30px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('blue');
    this.elementRef.nativeElement.style.fontSize = '10px';
  }

  private changeColor(color: string) {
    // Using Element Ref
    this.elementRef.nativeElement.style.color = color;

    // Using Render2
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'color', color);
  }

  /*  colours = [
      {id: 1, colour: 'Red', text: 'RED'},
      {id: 2, colour: 'Green', text: 'GREEN'},
      {id: 3, colour: 'Yellow', text: 'YELLOW'},
      {id: 4, colour: 'Orange', text: 'ORANGE'},
      {id: 5, colour: 'Pink', text: 'PINK'}
    ];
    text: any;
    color: any;*/
}
