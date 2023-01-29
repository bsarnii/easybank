import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseCardsComponent } from './why-choose-cards.component';

describe('WhyChooseCardsComponent', () => {
  let component: WhyChooseCardsComponent;
  let fixture: ComponentFixture<WhyChooseCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyChooseCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChooseCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
