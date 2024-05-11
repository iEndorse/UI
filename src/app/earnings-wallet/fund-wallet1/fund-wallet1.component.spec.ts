import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundWallet1Component } from './fund-wallet1.component';

describe('FundWallet1Component', () => {
  let component: FundWallet1Component;
  let fixture: ComponentFixture<FundWallet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundWallet1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundWallet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
