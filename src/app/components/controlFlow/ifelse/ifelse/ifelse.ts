import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  imports: [FormsModule],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css'
})
export class Ifelse {
 div1Visiable: boolean = true;
  isWarnigDivVisiable: boolean = false;
  num1: string = '';
  num2: string = '';
  selectedStatus: string = '';

  constructor() {
    
  }

  showDiv1() { 
    this.div1Visiable = true;
  }
  hideDiv1() { 
    this.div1Visiable = false;
  }
  toggleDiv2() { 
    this.isWarnigDivVisiable = !this.isWarnigDivVisiable;
  }
}
