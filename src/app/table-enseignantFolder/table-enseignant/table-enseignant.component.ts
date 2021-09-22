import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EnseignantService } from '../enseignant.service'
@Component({
  selector: 'app-table-enseignant',
  templateUrl: './table-enseignant.component.html',
  styleUrls: ['./table-enseignant.component.css']
})
export class TableEnseignantComponent implements OnInit {
  private enseignants = []
  constructor(private EnseignantService: EnseignantService, private router: Router) { }

  ngOnInit() {

    this.EnseignantService.getallEnseignant().then((resp) => { this.enseignants = resp.data });
  }
  EnseignantDelete(element) {
    let dynamicParameter = this.EnseignantId(element);
    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if (result) {
      this.EnseignantService.deleteEnseignant(dynamicParameter).then(() => {
        ;

        this.router.navigate(['/table-enseignant'])
      }

      )
    }
  }

  EnseignantId(element) {

    let id: String;
    this.enseignants.forEach(async (value, index) => {
      if (value == element) {

        id = JSON.parse(element[("id")]);

      }

    })

    return id
  }
}
