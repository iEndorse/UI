import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryScreen3Component } from './summary-screen3.component';

describe('SummaryScreen3Component', () => {
  let component: SummaryScreen3Component;
  let fixture: ComponentFixture<SummaryScreen3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryScreen3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryScreen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
