import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantSidebarComponent } from './accountant-sidebar.component';

describe('AccountantSidebarComponent', () => {
  let component: AccountantSidebarComponent;
  let fixture: ComponentFixture<AccountantSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountantSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
