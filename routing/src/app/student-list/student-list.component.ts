import { Component, OnInit } from '@angular/core';
import {} from '@angular/router'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  students=[

    {"id":"11","name":"nayem"},
    { "id": "12", "name": "abir" },
    { "id": "13", "name": "kabir" },
    { "id": "14", "name": "nabil" }
  ];
  ngOnInit() {
  }

  onclickAction(){

  }
}
