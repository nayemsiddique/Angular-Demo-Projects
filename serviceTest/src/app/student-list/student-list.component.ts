import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students = [];
  constructor(private studentservice:StudentServiceService) { }





  ngOnInit() {
    this.students=this.studentservice.getStudent();
  }

}
