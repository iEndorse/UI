import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetails1Component } from './bank-details1.component';

describe('BankDetails1Component', () => {
  let component: BankDetails1Component;
  let fixture: ComponentFixture<BankDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankDetails1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
