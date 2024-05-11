import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessWallet4Component } from './success-wallet4.component';

describe('SuccessWallet4Component', () => {
  let component: SuccessWallet4Component;
  let fixture: ComponentFixture<SuccessWallet4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessWallet4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessWallet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
