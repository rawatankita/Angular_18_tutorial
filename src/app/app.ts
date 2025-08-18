import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeList } from './components/employee-list/employee-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AddEmployee,EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_18_tutorial');
}
