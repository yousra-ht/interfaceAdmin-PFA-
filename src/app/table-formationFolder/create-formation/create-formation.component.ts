import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios'
import { TableFormationService } from '../services/table-formation.service';
@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css']
})
export class CreateFormationComponent implements OnInit {
  private baseUrl = 'http://localhost:8090/BackendInterfaceAdminApplication/api/v1/table_formation';
  FormationForm = new FormGroup({
    nom: new FormControl(''),

  });
  constructor(private tableformationservice: TableFormationService, private router: Router) { }
  ngOnInit() { }
  onSubmit() {

    console.warn(this.FormationForm.value);


  }

  addFormation(e) {
    e.stopPropagation()
    {

      this.tableformationservice.createFormation({
        nom: this.FormationForm.get('nom').value,

      }).then(() => {

        console.warn("success");
        this.router.navigate(['/table_formation']);

      })
    }

  }

}