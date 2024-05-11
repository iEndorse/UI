import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundWallet2Component } from './fund-wallet2.component';

describe('FundWallet2Component', () => {
  let component: FundWallet2Component;
  let fixture: ComponentFixture<FundWallet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundWallet2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundWallet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
