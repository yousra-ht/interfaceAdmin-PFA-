import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service'
@Component({
  selector: 'app-table-etudiant',
  templateUrl: './table-etudiant.component.html',
  styleUrls: ['./table-etudiant.component.css']
})
export class TableEtudiantComponent implements OnInit {
  private etudiants = []
  constructor(private etudiantservice: EtudiantService, private router: Router) { }

  ngOnInit() {
    this.etudiantservice.getallTps().then((resp) => { this.etudiants = resp.data })
  }
  EtudiantDelete(element) {
    let dynamicParameter = this.EtudiantId(element);
    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if (result) {
      this.etudiantservice.deleteEtudiant(dynamicParameter).then(() => {


        this.router.navigate(['/table-etudiant'])
      }

      )
    }
  }

  EtudiantId(element) {

    let id: String;
    this.etudiants.forEach(async (value, index) => {
      if (value == element) {

        id = JSON.parse(element[("id")]);

      }
    })
    return id
  }
}
