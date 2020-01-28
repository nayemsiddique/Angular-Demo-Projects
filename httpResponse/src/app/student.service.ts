import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs'
import { IStudent } from './istudent';
import { Student } from './student';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public _url ="https://human-resource-server.herokuapp.com/api/v1/tokens"

  constructor(private httpClient:HttpClient) { }

  getStudent():Observable<IStudent[]>{

    return this.httpClient.get<IStudent[]>(this._url)
                                        // .catchError(this.throwError);

    
    

}

}
