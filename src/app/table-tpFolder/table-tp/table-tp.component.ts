import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TpService } from '../tp.service'
@Component({
  selector: 'app-table-tp',
  templateUrl: './table-tp.component.html',
  styleUrls: ['./table-tp.component.css']
})
export class TableTPComponent implements OnInit {
  private tps = []
  constructor(private tpService: TpService, private router: Router) { }

  ngOnInit() {
    this.tpService.getallTps().then((resp) => { this.tps = resp.data })
  }
  TpDelete(element) {
    let dynamicParameter = this.TPId(element);
    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if (result) {
      this.tpService.deleteTp(dynamicParameter).then(() => {
        ;

        this.router.navigate(['/table_TPs'])
      }

      )
    }
  }

  TPId(element) {

    let id: String;
    this.tps.forEach(async (value, index) => {
      if (value == element) {

        id = JSON.parse(element[("id")]);

      }

    })

    return id
  }
}
