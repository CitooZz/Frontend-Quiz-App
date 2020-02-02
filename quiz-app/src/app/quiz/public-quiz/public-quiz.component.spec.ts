import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicQuizComponent } from './public-quiz.component';

describe('PublicQuizComponent', () => {
  let component: PublicQuizComponent;
  let fixture: ComponentFixture<PublicQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
