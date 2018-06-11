import { Component, OnInit } from '@angular/core';
import  taskID from '../array';
import {BookingsComponent} from '../bookings/bookings.component'

@Component({
  selector: 'app-confimation',
  templateUrl: './confimation.component.html',
  styleUrls: ['./confimation.component.css']
})
export class ConfimationComponent implements OnInit {

  ngOnInit() {
  }

  firstName = taskID[0];
  lastName = taskID[1];
  email = taskID[2];
  guests = taskID[3];
  date = taskID[4];
  beds = taskID[5];  

  /*Book(firstName, lastName, email, guests, date, beds){
    let object = Array(firstName,lastName, email,guests,date,beds);
    if(object != null){
      this.taskID.push(object)
  } 

  } */
}
