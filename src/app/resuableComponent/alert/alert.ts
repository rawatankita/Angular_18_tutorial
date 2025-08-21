import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges,ElementRef, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class AlertComponent implements OnChanges {
  @Input() message: string = '';
  @Input() alertType: string = '';
  alertMode: string = "DEmo Demo";


  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    console.log('ngOnChanges')
  }

  
 
}
