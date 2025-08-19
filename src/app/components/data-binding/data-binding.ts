import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

coursename: string = "Angular 18 course";
rollNo: number = 123;
isInidan: boolean = false;
currentDate: Date = new Date();
myClass:string = "bg-primary";
inputType: string = "text";
carname:string = "Maruti";

firstName = signal("Angular");

constructor(){}

showEventAlert(message : String){
alert(message);
}
changeCourseName() {
  this.coursename = "React Course";
  this.firstName.set("React");
}
}
