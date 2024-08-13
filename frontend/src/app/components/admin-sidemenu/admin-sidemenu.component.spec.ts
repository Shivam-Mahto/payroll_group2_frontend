import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidemenuComponent } from './admin-sidemenu.component';

describe('AdminSidemenuComponent', () => {
  let component: AdminSidemenuComponent;
  let fixture: ComponentFixture<AdminSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSidemenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
