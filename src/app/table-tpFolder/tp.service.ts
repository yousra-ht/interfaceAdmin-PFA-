import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TpService {
  private baseUrl = "http://localhost:8090/BackendInterfaceAdminApplication/api/v4/table_TravauxPratique"
  constructor() { }
  async getallTps() {
    return await axios.get(`${this.baseUrl}`);
  }

  async createTp(TP) {
    return await axios.post(`${this.baseUrl}`, TP);
  }
  async deleteTp(id) {
    return await axios.delete(this.baseUrl + "/" + id)
  }

}
