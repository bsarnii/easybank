import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestIconComponent } from './pinterest-icon.component';

describe('PinterestIconComponent', () => {
  let component: PinterestIconComponent;
  let fixture: ComponentFixture<PinterestIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinterestIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinterestIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
