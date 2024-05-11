import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageGuestUser4Component } from './landing-page-guest-user4.component';

describe('LandingPageGuestUser4Component', () => {
  let component: LandingPageGuestUser4Component;
  let fixture: ComponentFixture<LandingPageGuestUser4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageGuestUser4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingPageGuestUser4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
