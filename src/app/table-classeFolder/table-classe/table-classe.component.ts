import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from '../classe.service'
@Component({
  selector: 'app-table-classe',
  templateUrl: './table-classe.component.html',
  styleUrls: ['./table-classe.component.css']
})
export class TableClasseComponent implements OnInit {
  private Classes = [];

  constructor(private ClasseService: ClasseService, private router: Router) { }

  ngOnInit() {
    this.ClasseService.getALLclasse().then((resp) => { this.Classes = resp.data });
  }
  classeDetaille(element) {

    let dynamicParameter = this.ClasseId(element);
    this.router.navigate(['/ListeEtudiant/' + dynamicParameter]);

  }

  ClasseId(element) {

    let id: String;
    this.Classes.forEach(async (value, index) => {
      if (value == element) {

        id = JSON.parse(element[("id")]);

      }

    })

    return id
  }

  deleteClasse(element) {
    let dynamicParameter = this.ClasseId(element);
    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if (result) {
      this.ClasseService.deleteClasse(dynamicParameter).then(() => {
        this.router.navigate(['/table_classe'])
      }

      )
    }
  }


}
