import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table-group-tp',
  templateUrl: './table-group-tp.component.html',
  styleUrls: ['./table-group-tp.component.css']
})
export class TableGroupTPComponent implements OnInit {
  public GroupTps = [];
  constructor(private Tableservice: TableService, private router: Router) { }

  ngOnInit() {
    this.Tableservice.getAllGroupeTp().then((resp) => { this.GroupTps = resp.data });
  }

  GroupTpDelete(element) {
    let dynamicParameter = this.GroupTPId(element);
    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if (result) {
      this.Tableservice.deleteGroupTP(dynamicParameter).then(() => {
        ;

        this.router.navigate(['/table-group-tp'])
      }

      )
    }
  }

  GroupTPId(element) {

    let id: String;
    this.GroupTps.forEach(async (value, index) => {
      if (value == element) {

        id = JSON.parse(element[("id")]);

      }

    })

    return id
  }
}
