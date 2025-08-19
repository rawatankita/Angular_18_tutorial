import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeList } from './components/employee-list/employee-list';
import { DataBinding } from './components/data-binding/data-binding';
import { FormsModule } from '@angular/forms';
import { StructuralDir } from './components/directive/structural-dir/structural-dir/structural-dir';
import { AttributeDirective } from './components/directive/attribute-directive/attribute-directive/attribute-directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,DataBinding,StructuralDir,AttributeDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_18_tutorial');
}
