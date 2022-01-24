import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-survey-form-data',
  templateUrl: './survey-form-data.component.html',
  styleUrls: ['./survey-form-data.component.css']
})

export class SurveyFormDataComponent implements OnInit{
  surveyForm!: FormGroup;
 
  constructor(private fb: FormBuilder) {}
 
  ngOnInit() {
    this.surveyForm = this.fb.group({
      title:'',
      description: '',
      questions: this.fb.array([])
    });
  }
 
  questions(): FormArray {
    return this.surveyForm.get('questions') as FormArray;
  }
 
  newQuestion(): FormGroup {
    return this.fb.group({
      question: '',
      options: this.fb.array([])
    });
  }
 
  addQuestion() {
    this.questions().push(this.newQuestion());
  }
 
  removeQuestion(questIndex: number) {
    this.questions().removeAt(questIndex);
  }
 
  questionOptions(questIndex: number): FormArray {
    return this.questions()
      .at(questIndex)
      .get('options') as FormArray;
  }
 
  newOption(): FormGroup {
    return this.fb.group({
      option: ''
     
    });
  }
 
  addQuestionOption(questIndex: number) {
    this.questionOptions(questIndex).push(this.newOption());
  }
 
  removeQuestionOption(questIndex: number, optionIndex: number) {
    this.questionOptions(questIndex).removeAt(optionIndex);
  }
 
  onSubmit() {
    console.log(this.surveyForm.value);
  }
}