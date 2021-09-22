import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiliereServiceService } from '../filiere-service.service'
@Component({
  selector: 'app-table-filiere',
  templateUrl: './table-filiere.component.html',
  styleUrls: ['./table-filiere.component.css']
})
export class TableFiliereComponent implements OnInit {
  public filieres = [];
  constructor(private filiereserviceService: FiliereServiceService, private router: Router) { }

  ngOnInit() {
    this.filiereserviceService.getAllFiliere().then((resp) => { this.filieres = resp.data; });

  }
  FiliereDelete(element) {
    let dynamicParameter = this.FiliereId(element);
    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if (result) {
      this.filiereserviceService.deleteFiliere(dynamicParameter).then(() => {
        console.log("succes");

        this.router.navigate(['/table_filiere'])
      }

      )
    }
  }

  FiliereId(element) {

    let id: String;
    this.filieres.forEach(async (value, index) => {
      if (value == element) {

        id = JSON.parse(element[("id")]);

      }

    })

    return id
  }
}
