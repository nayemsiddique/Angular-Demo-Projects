import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  
  
  fname:string="Nayem";
  public students=[];
  public _error;
  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.studentService.getStudent().subscribe(
      data =>this.students=data)
      // error=>this._error=error);
    // for(let i=0;i<this.students.length;i++){
    //   console.log(this.students[i]);
    // }
    console.log(this.students)
  }


  onClckBtn(){
    this.fname="Name Changeed";
  }
}
