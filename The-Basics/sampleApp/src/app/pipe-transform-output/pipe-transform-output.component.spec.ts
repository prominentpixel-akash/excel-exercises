import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTransformOutputComponent } from './pipe-transform-output.component';

describe('PipeTransformOutputComponent', () => {
  let component: PipeTransformOutputComponent;
  let fixture: ComponentFixture<PipeTransformOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeTransformOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeTransformOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
