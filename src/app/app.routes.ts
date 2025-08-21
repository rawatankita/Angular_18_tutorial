import { Routes } from '@angular/router';
import { AddEmployee } from './components/add-employee/add-employee';
import { DataBinding } from './components/data-binding/data-binding';
import { EmployeeList } from './components/employee-list/employee-list';
import { StructuralDir } from './components/directive/structural-dir/structural-dir/structural-dir';
import { AttributeDirective } from './components/directive/attribute-directive/attribute-directive/attribute-directive';
import { Ifelse } from './components/controlFlow/ifelse/ifelse/ifelse';
import { For } from './components/controlFlow/for/for/for';
import { Pipe } from './components/pipe/pipe/pipe';
import { Template } from './components/forms/template/template/template';
import { Reactive } from './components/forms/reactive/reactive/reactive';
import { GetApi } from './components/apiIntegration/get-api/get-api';
import { PostApi } from './components/apiIntegration/post-api/post-api';

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
    {
                path: 'if-else',
                component: Ifelse
    },
    {
                path: 'for',
                component: For
    },
    {
                path: 'pipe',
                component: Pipe
    },
    {
                path: 'template',
                component: Template
    },
    {
                path: 'reactive',
                component: Reactive
    },
    {
                path: 'get-api',
                component: GetApi
    },
    {
                path: 'post-api',
                component: PostApi
    },
];
