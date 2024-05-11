import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageGuestUser1Component } from './landing-page-guest-user1.component';

describe('LandingPageGuestUser1Component', () => {
  let component: LandingPageGuestUser1Component;
  let fixture: ComponentFixture<LandingPageGuestUser1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageGuestUser1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingPageGuestUser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
