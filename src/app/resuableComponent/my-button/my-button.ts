import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css'
})
export class MyButtonComponent {

  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() onBtnClick = new EventEmitter<any>();

  onClick() {
    debugger;
    this.onBtnClick.emit('Hii From Child')
  }
}