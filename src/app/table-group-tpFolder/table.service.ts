import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private baseUrlClasseSelect = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v3/classeGroup'
  private baseUrl = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v7/Groupe';
  private baseUrlTpSelect = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v4/dataTP'
  private baseUrlensSelect = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v6/enseignantData'
  constructor() { }

  async createGroup(group) {
    return await axios.post(`${this.baseUrl}`, group);
  }
  async getAllGroupeTp() {

    return await axios.get(`${this.baseUrl}`);
  }
  async getALLclasse() {

    return await axios.get(`http://localhost:8090/BackendInterfaceAdminApplication/api/v3/table_classe`);

  }
  async getallEnseignant() {

    return await axios.get(`http://localhost:8090/BackendInterfaceAdminApplication/api/v6/table_Enseignant`);
  }
  async getallTps() {
    return await axios.get(`http://localhost:8090/BackendInterfaceAdminApplication/api/v4/table_TravauxPratique`);
  }
  async getSelectclasse(id) {

    return await axios.get(`${this.baseUrlClasseSelect}` + "/" + id)
  }
  async getSelecttp(id) {

    return await axios.get(`${this.baseUrlTpSelect}` + "/" + id)
  }
  async getSelectenseignant(id) {

    return await axios.get(`${this.baseUrlensSelect}` + "/" + id)
  }

  async deleteGroupTP(id) {
    return await axios.delete(this.baseUrl + "/" + id)
  }


}




