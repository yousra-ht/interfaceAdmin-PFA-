import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnseignantService } from '../enseignant.service'
@Component({
  selector: 'app-create-enseignant',
  templateUrl: './create-enseignant.component.html',
  styleUrls: ['./create-enseignant.component.css']
})
export class CreateEnseignantComponent implements OnInit {
  enseignatForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    mail: new FormControl(''),

  });
  constructor(private EnseignantService: EnseignantService, private router: Router) { }

  ngOnInit() {
  }
  addenseignant(e) {
    e.stopPropagation()
    {

      this.EnseignantService.createenseignat({
        nom: this.enseignatForm.get('nom').value,
        // prenom: this.etudiantForm.get('nom').value,
        mail: this.enseignatForm.get('mail').value,
        prenom: this.enseignatForm.get('nom').value,
      }).then(() => {

        console.warn("success");
        this.router.navigate(['/table-enseignant']);


      })
    }

  }
}
