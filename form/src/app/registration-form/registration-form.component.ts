import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor() { }
  student=new Student('nayem','2012','nayem@email.com','Dhaka');

  ngOnInit() {
  }

}
