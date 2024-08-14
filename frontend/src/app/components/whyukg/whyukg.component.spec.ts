import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyukgComponent } from './whyukg.component';

describe('WhyukgComponent', () => {
  let component: WhyukgComponent;
  let fixture: ComponentFixture<WhyukgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyukgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyukgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
