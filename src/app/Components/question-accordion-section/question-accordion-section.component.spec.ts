import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAccordionSectionComponent } from './question-accordion-section.component';

describe('QuestionAccordionSectionComponent', () => {
  let component: QuestionAccordionSectionComponent;
  let fixture: ComponentFixture<QuestionAccordionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAccordionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAccordionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
