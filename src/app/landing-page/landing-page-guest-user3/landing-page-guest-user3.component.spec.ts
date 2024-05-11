import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageGuestUser3Component } from './landing-page-guest-user3.component';

describe('LandingPageGuestUser3Component', () => {
  let component: LandingPageGuestUser3Component;
  let fixture: ComponentFixture<LandingPageGuestUser3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageGuestUser3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingPageGuestUser3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
