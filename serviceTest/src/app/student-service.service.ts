import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }
  getStudent(){
    return [ 
    { "id": "1221", "name": "Nayem", "Phone": "2013" },
    { "id": "1221", "name": "Nayem", "Phone": "2013" },
    { "id": "1221", "name": "Nayem", "Phone": "2013" },
    { "id": "1221", "name": "Nayem", "Phone": "2013" },
    { "id": "1221", "name": "Nayem", "Phone": "2013" },
    { "id": "1221", "name": "Nayem", "Phone": "2013" }
    
  ]
  }
}
