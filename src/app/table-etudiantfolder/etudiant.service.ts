import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = "http://localhost:8090/BackendInterfaceAdminApplication/api/v5/table_Etudiant"
  constructor() { }
  async getallTps() {
    return await axios.get(`${this.baseUrl}`);
  }
  async createetudiant(etudiant) {
    return await axios.post(`${this.baseUrl}`, etudiant);
  }
  async deleteEtudiant(id) {
    return await axios.delete(this.baseUrl + "/" + id)
  }
}
