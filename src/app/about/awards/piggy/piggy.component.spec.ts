import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiggyComponent } from './piggy.component';

describe('PiggyComponent', () => {
  let component: PiggyComponent;
  let fixture: ComponentFixture<PiggyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiggyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
