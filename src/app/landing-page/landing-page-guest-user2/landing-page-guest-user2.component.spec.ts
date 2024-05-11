import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageGuestUser2Component } from './landing-page-guest-user2.component';

describe('LandingPageGuestUser2Component', () => {
  let component: LandingPageGuestUser2Component;
  let fixture: ComponentFixture<LandingPageGuestUser2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageGuestUser2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingPageGuestUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
