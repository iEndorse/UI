import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemPoints2Component } from './redeem-points2.component';

describe('RedeemPoints2Component', () => {
  let component: RedeemPoints2Component;
  let fixture: ComponentFixture<RedeemPoints2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedeemPoints2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedeemPoints2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
