import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemPoints1Component } from './redeem-points1.component';

describe('RedeemPoints1Component', () => {
  let component: RedeemPoints1Component;
  let fixture: ComponentFixture<RedeemPoints1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedeemPoints1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedeemPoints1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
