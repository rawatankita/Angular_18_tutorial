import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [AsyncPipe,JsonPipe,DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css'
})
export class Pipe {
   firstName: string = "this is a demo session";

  currentDate: Date = new Date();

  student: any = {
    name:'Chetan',
    city:'Pune',
    empId:323,
    state: undefined
  };
  currentRole: string = '';

  constructor() { 
   
  
  }

}
