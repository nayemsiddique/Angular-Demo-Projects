import { Component, OnInit } from '@angular/core';
import {Student} from './patient.model';
import {FormControl} from '@angular/forms';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient:Student[]=[];
  studentList:Array<any>=[];
  constructor(private patientService: PatientService) { 
    
  }


  ngOnInit() {
    this.patientService.getAll().subscribe(data =>{
      // this.studentList[1]=data;
      var x=data;
      for(let i=0;i<x.length;i++) this.patient.push(x[i]);
      console.log(data);
    } );

    // this.patientService.getAll().subscribe(data =>this.studentList.push(data));
   //  this.patient.forEach(console.log);
    // tslint:disable-next-line:prefer-for-of
    // for(let i= 0; i< this.patient.length;i++){
    //   console.log(this.patient[i]);
    // }

     this.studentList.forEach(console.log);
     console.log(this.studentList.length);
    //  for(let i=0;i<this.studentList.length;i++){
    //    console.log(this.studentList.values);
    //  }
  }
  
   name = new FormControl();
   email = new FormControl();
   phone = new FormControl();
   address = new FormControl();
   age = new FormControl();
   gender = new FormControl();
   id = new FormControl();

  isDisabled=true;
  //  table = new FormControl();
  setvalue() {
    // tslint:disable-next-line: label-position
    // tslint:disable-next-line: max-line-length
    
    const p = new Student(this.id.value,this.name.value,this.address.value,this.email.value,this.phone.value,this.age.value,this.gender.value)
    // this.patient.push(p);

    this.patientService.create(p).subscribe(data=> this.patient.push(data));
    this.name.setValue('');
    this.email.setValue('');
    this.address.setValue('');
    this.phone.setValue('');
    this.age.setValue('');
    this.gender.setValue('');
  }
  deleteAction(index){

    if (confirm("Are you sure to delete ?")) {
      // tslint:disable-next-line:no-unused-expression
     var ss = this.patient[index];
     console.log(ss);
     this.patientService.delete(ss.id).subscribe(data => console.log(data));
      this.patient.splice(index,1);
      // console.log(this.patient);
    
      // console.log(index)
    }

    
  }
  i;
  CSelect;
  editAction(index) {
    this.i = index;
    const q = this.patient[index];

    this.name.setValue(q.name);
    this.email.setValue(q.email);
    this.address.setValue(q.address);
    this.phone.setValue(q.phone);
    this.age.setValue(q.age);
    this.id.setValue(q.id);
    this.CSelect=q.gender;
    this.isDisabled=false;
    
  }

  OnEditButtonMouseAction(){
    this.patient[this.i].name=this.name.value;
    this.patient[this.i].email = this.email.value;
    this.patient[this.i].address =this.address.value;
    this.patient[this.i].phone = this.phone.value;
    this.patient[this.i].age = this.age.value;
    this.patient[this.i].id = this.id.value;
    this.patient[this.i].gender = this.gender.value;

    this.patientService.update(this.patient[this.i]).subscribe(data => console.log(data));
    console.log(this.patient);
    
    this.patient.forEach(console.log);
  }
  


}
