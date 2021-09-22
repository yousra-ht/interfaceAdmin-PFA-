import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private baseUrlEtudiantClass = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v5/Etudiant/'
  private UrlEtudiant = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v8/classe_etudiant';
  private baseUrl = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v3/table_classe';
  private baseUrlFiliere = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v2/table_filiere';
  private baseUrlFormation = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v1/table_formation';
  private baseUrlFormSelect = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v3/formation'
  private baseUrlFilierSelect = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v3/filiere'
  constructor() { }

  async getALLclasse() {

    return await axios.get(`${this.baseUrl}`);

  }
  async getALLFiliere() {

    return await axios.get(`${this.baseUrlFiliere}`);

  }
  async getALLFormation() {

    return await axios.get(`${this.baseUrlFormation}`);

  }
  async getSelectForm(id) {

    return await axios.get(`${this.baseUrlFormSelect}` + "/" + id)
  }
  async getSelectfiliere(id) {

    return await axios.get(`${this.baseUrlFilierSelect}` + "/" + id)
  }
  async createClasse(filiere) {
    return await axios.post(`${this.baseUrl}`, filiere);
  }
  async getEtudiant(id) {

    return await axios.get(`${this.UrlEtudiant}` + "/" + id);

  }

  async getEtudiantclasse(id) {

    return await axios.get(`${this.baseUrlEtudiantClass}` + "/" + id);

  }
  async deleteClasse(id) {
    return await axios.delete(this.baseUrl + "/" + id)
  }

}
