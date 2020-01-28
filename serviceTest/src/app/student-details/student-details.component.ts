import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public students=[];
  constructor(public studentService:StudentServiceService) { }

  ngOnInit() {
    this.students=this.studentService.getStudent();
  }

}
