import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './patient/patient.model';
import { IStudent } from './ipatient';

import { retry, catchError } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: "root"
})
export class PatientService {
  private BaseUrl = 'http://localhost:5000/api/v1/students/';
  constructor(private httpClient: HttpClient) {}


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  
  getAll(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this.BaseUrl);
  }

  delete(id):Observable<IStudent> {
    return this.httpClient.delete<IStudent>(this.BaseUrl+ id);
  }

  create(student): Observable<IStudent> {
    return this.httpClient
      .post<IStudent>(this.BaseUrl, JSON.stringify(student),this.httpOptions);
  }

  update(student): Observable<IStudent> {
    return this.httpClient.put<IStudent>(this.BaseUrl, JSON.stringify(student),this.httpOptions);
 
     } 
}
