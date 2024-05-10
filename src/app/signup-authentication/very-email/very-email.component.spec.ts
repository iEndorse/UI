import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeryEmailComponent } from './very-email.component';

describe('VeryEmailComponent', () => {
  let component: VeryEmailComponent;
  let fixture: ComponentFixture<VeryEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeryEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeryEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
