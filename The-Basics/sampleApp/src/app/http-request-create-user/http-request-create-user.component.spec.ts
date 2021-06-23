import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequestCreateUserComponent } from './http-request-create-user.component';

describe('HttpRequestCreateUserComponent', () => {
  let component: HttpRequestCreateUserComponent;
  let fixture: ComponentFixture<HttpRequestCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpRequestCreateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRequestCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
