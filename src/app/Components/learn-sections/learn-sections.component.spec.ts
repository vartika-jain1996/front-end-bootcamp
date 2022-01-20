import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSectionsComponent } from './learn-sections.component';

describe('LearnSectionsComponent', () => {
  let component: LearnSectionsComponent;
  let fixture: ComponentFixture<LearnSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
