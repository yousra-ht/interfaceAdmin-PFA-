import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent implements OnInit {

  constructor(private etudianteervice: EtudiantService, private router: Router) { }
  etudiantForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    mail: new FormControl(''),

  });
  ngOnInit() {
  }
  addetudiant(e) {
    e.stopPropagation()
    {

      this.etudianteervice.createetudiant({
        username: this.etudiantForm.get('nom').value,
        // prenom: this.etudiantForm.get('nom').value,
        email: this.etudiantForm.get('mail').value,
        password: this.etudiantForm.get('nom').value,
      }).then(() => {

        console.warn("success");
        this.router.navigate(['/table-etudiant']);

      })
    }

  }
}
