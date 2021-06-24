import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationRouteProtectionComponent } from './authentication-route-protection.component';

describe('AuthenticationRouteProtectionComponent', () => {
  let component: AuthenticationRouteProtectionComponent;
  let fixture: ComponentFixture<AuthenticationRouteProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationRouteProtectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationRouteProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
