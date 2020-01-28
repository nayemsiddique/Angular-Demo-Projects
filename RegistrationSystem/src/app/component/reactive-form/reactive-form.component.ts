import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  formGroup= new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    email:new FormControl('')
  });
  ngOnInit() {
    
  }

  submitForm(){
    console.log(this.formGroup.value);
  }

}
