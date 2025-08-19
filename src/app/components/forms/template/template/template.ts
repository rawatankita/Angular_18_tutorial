import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constant } from '../../../../constant/constant';

@Component({
  selector: 'app-template',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template.html',
  styleUrl: './template.css'
})
export class Template {
 studentObj: any = {
    firstName: '',
    lastName: '',
    userName:'',
    city: '',
    state: '',
    zipCode:'',
    isAcceptTerms: false
  }

  validationMessage: any =  Constant.VALIDATION_MESSAGE;
  formValue: any;

  onSubmit() {
    debugger;
    this.formValue  = this.studentObj;
    console.log(this.formValue);
  }
  resetForm() {
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName:'',
      city: '',
      state: '',
      zipCode:'',
      isAcceptTerms: false
    }
  }
}
