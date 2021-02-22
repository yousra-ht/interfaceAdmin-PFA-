import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import{formation} from '../model/table-formation';
import'rxjs/add/observable/of';
import'rxjs/Rx'

import { map, filter, scan } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableFormationService {

  private baseUrl = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v1/table_formation';
  constructor(private http: HttpClient) { }
  getAllFormation(): Observable<formation []> {
    return this.http.get<formation []>(`${this.baseUrl}`);
}
createFormation (formation : object): Observable <object>
{
return this.http.post(`${this.baseUrl}`,formation);
}
}
