import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankArrayComponent } from './blank-array.component';

describe('BlankArrayComponent', () => {
  let component: BlankArrayComponent;
  let fixture: ComponentFixture<BlankArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
