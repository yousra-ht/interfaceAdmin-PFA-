import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class FiliereServiceService {
  private baseUrl = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v2/table_filiere';
  constructor() { }
  async getAllFiliere() {

    return await axios.get(`${this.baseUrl}`);

  }

  async createFiliere(filiere) {
    return await axios.post(`${this.baseUrl}`, filiere);
  }
  async deleteFiliere(id) {
    return await axios.delete(this.baseUrl + "/" + id)
  }



}
