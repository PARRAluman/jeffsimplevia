import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PSDepartments } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})

export class PostDeptsService {
  // web api string
  private _url: string = 'http://192.168.100.16:50870/api/PostDepartment';
  
  constructor(private http: HttpClient) { }

  // post data to api
  addDept(dept: PSDepartments) {
    return this.http.post(this._url, dept);
  }
}
