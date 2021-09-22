import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { formation } from '../model/table-formation';
import 'rxjs/add/observable/of';
import 'rxjs/Rx'
import axios from 'axios'
import { map, filter, scan } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableFormationService {

  private baseUrl = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v1/table_formation';
  constructor() { }
  async getAllFormation() {

    return await axios.get(`${this.baseUrl}`);
  }
  // getAllFormation(): any {
  //   return this.http.get<any>(`${this.baseUrl}`);
  // }
  // createFormation(formation: object): Observable<object> {
  //   return this.http.post(`${this.baseUrl}`, formation);
  // }
  async createFormation(formation) {
    return await axios.post(`${this.baseUrl}`,formation);
  }
  async deleteFormation(id) {
    return await axios.delete(this.baseUrl + "/" + id)
  }
}
