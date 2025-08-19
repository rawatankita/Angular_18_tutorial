import { Routes } from '@angular/router';
import { AddEmployee } from './components/add-employee/add-employee';
import { DataBinding } from './components/data-binding/data-binding';
import { EmployeeList } from './components/employee-list/employee-list';
import { StructuralDir } from './components/directive/structural-dir/structural-dir/structural-dir';
import { AttributeDirective } from './components/directive/attribute-directive/attribute-directive/attribute-directive';

export const routes: Routes = [
     {
        path:'add-employee',
        component:AddEmployee
    }, 
    {
        path:'data-binding',
        component:DataBinding
    }, 
    {
        path:'emp-list',
        component: EmployeeList
    },
    {
        path:'structural-dir',
        component: StructuralDir
    },
    {
        path: 'attributedirective',
        component: AttributeDirective
    },
];
