import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private baseUrl = '//localhost:8090/BackendInterfaceAdminApplication/api/v6/table_Enseignant'
  constructor() { }
  async getallEnseignant() {

    return await axios.get(`${this.baseUrl}`);
  }

  async createenseignat(enseignant) {
    return await axios.post(`${this.baseUrl}`, enseignant);
  }
  async deleteEnseignant(id) {
    return await axios.delete(this.baseUrl + "/" + id)
  }
}
