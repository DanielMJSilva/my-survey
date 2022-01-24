import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormDataComponent } from './survey-form-data.component';

describe('SurveyFormDataComponent', () => {
  let component: SurveyFormDataComponent;
  let fixture: ComponentFixture<SurveyFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyFormDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
