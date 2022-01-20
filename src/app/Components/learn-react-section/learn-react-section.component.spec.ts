import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnReactSectionComponent } from './learn-react-section.component';

describe('LearnReactSectionComponent', () => {
  let component: LearnReactSectionComponent;
  let fixture: ComponentFixture<LearnReactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnReactSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnReactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
