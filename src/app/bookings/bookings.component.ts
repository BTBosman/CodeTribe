import { Component, OnInit } from '@angular/core';
import taskID from '../array';
import {ConfimationComponent} from '../confimation/confimation.component';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  ngOnInit() {
    
  }

  remove(a){
    this.Array.splice(a,1);
  }
  title = 'app'; 
  Array = [];

  Book(firstName, lastName, email, guests, date, beds){

    taskID[0]= firstName;
    taskID[1]= lastName;
    taskID[2]= email;
    taskID[3]= guests;
    taskID[4]= date;
    taskID[5]= beds;

    console.log(taskID);

    let object = new Array(firstName,lastName, email,guests,date,beds);
    if(object != null){
      this.Array.push(object)
    }
  
  }
  
  constructor(){

  }
  
}

