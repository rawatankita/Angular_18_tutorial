import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Master } from './master/master';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private master: Master) { }

  getUsers() {
    return this.master.get('https://jsonplaceholder.typicode.com/users');
  }
}