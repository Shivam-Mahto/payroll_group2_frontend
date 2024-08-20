import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordTokenComponent } from './forgot-password-token.component';

describe('ForgotPasswordTokenComponent', () => {
  let component: ForgotPasswordTokenComponent;
  let fixture: ComponentFixture<ForgotPasswordTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordTokenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
