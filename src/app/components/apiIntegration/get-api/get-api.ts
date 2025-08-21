import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../../resuableComponent/alert/alert';
@Component({
  selector: 'app-get-api',
  imports: [AlertComponent],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi {
   userList: any= [];
  customerList: any= [];
   alertMsg : string = '';

constructor(private http : HttpClient)
{
this.getAllUser();

}
changeMSg() {
    this.alertMsg = 'THHJJHJ'
  }
getAllUser() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      debugger;
      this.userList = result;
    })
  }
    getAllCustomer() {
    debugger;
    // ng s --port 4209
    this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((res1:any)=>{
      debugger;
      this.customerList =  res1.data;
    }, error=>{
      debugger;
    })
  }
}
