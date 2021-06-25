import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicComponentComponent} from './dynamic-component/dynamic-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SampleApp';

  @ViewChild('parent', {read: ViewContainerRef})
  parent: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    setTimeout(() => {

      // DynamicComponent to be rendered into the app.component without *ngIf :
      const childDynamicComponent = this.componentFactoryResolver.resolveComponentFactory(DynamicComponentComponent);
      this.parent.createComponent(childDynamicComponent);
    }, 30000);
  }
}
