import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequestManageUserComponent } from './http-request-manage-user.component';

describe('HttpRequestManageUserComponent', () => {
  let component: HttpRequestManageUserComponent;
  let fixture: ComponentFixture<HttpRequestManageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpRequestManageUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRequestManageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
