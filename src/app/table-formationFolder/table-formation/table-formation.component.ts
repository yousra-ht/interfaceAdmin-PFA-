import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { formation } from '../model/table-formation'
import { TableFormationService } from '../services/table-formation.service'
import { from } from 'rxjs';
import { Observable } from "rxjs";
import { ObservableInput } from "ngx-observable-input";
import { HttpClient } from '@angular/common/http';
import { AnimateTimings } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table-formation',
  templateUrl: './table-formation.component.html',
  styleUrls: ['./table-formation.component.css'],



})
export class TableFormationComponent implements OnInit {

  public formations = [];


  constructor(private tableformationservice: TableFormationService, private router: Router) { }

  ngOnInit() {
    // this.reloadData();
    //  this.tableformationservice.getAllFormation().subscribe((formations:formation[]) => { this.formations = formations }, err => { });
    this.tableformationservice.getAllFormation().then((resp) => { this.formations = resp.data });


  }

  FormationDelete(element) {
    let dynamicParameter = this.FormationId(element);
    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if (result) {
      this.tableformationservice.deleteFormation(dynamicParameter).then(() => {
        ;

        this.router.navigate(['/table_formation'])
      }

      )
    }
  }

  FormationId(element) {

    let id: String;
    this.formations.forEach(async (value, index) => {
      if (value == element) {

        id = JSON.parse(element[("id")]);

      }

    })

    return id
  }
}
