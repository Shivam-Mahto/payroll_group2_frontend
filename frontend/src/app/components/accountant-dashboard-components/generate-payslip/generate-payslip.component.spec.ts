import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePayslipComponent } from './generate-payslip.component';

describe('GeneratePayslipComponent', () => {
  let component: GeneratePayslipComponent;
  let fixture: ComponentFixture<GeneratePayslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratePayslipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratePayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
