import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { FiliereServiceService } from '../filiere-service.service';
@Component({
  selector: 'app-create-filiere',
  templateUrl: './create-filiere.component.html',
  styleUrls: ['./create-filiere.component.css']
})
export class CreateFiliereComponent implements OnInit {

  constructor(private filiereserviceservice: FiliereServiceService , private router : Router) { }
  filiereForm = new FormGroup({
    nom: new FormControl(''),

  });
  ngOnInit() {
  }

  onSubmit() {

    console.warn(this.filiereForm .value);
    

  }
  addFiliere(e) {
    e.stopPropagation()
    {

      this.filiereserviceservice.createFiliere({
        nom: this.filiereForm.get('nom').value,

      }).then(() => {

        console.warn("success");
        this.router.navigate(['/table_filiere']);

      })
    }

  }
}
