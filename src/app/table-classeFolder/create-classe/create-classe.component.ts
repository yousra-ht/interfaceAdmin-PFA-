import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseService } from '../classe.service'
@Component({
  selector: 'app-create-classe',
  templateUrl: './create-classe.component.html',
  styleUrls: ['./create-classe.component.css']
})
export class CreateClasseComponent implements OnInit {
  private filieres = []
  private formations = []
  private fromSelect;
  private filiereSelect;
  constructor(private ClasseService: ClasseService, private router: Router) { }
  classeForm = new FormGroup({
    nom: new FormControl(''),
    formation: new FormControl(''),
    filiere: new FormControl(''),

  });
  ngOnInit() {
    this.ClasseService.getALLFiliere().then((resp) => { this.filieres = resp.data });
    this.ClasseService.getALLFormation().then((resp) => { this.formations = resp.data });

  }
  addClasse(e) {
    e.stopPropagation()
    {
      this.ClasseService.getSelectForm(this.classeForm.get('formation').value).
        then((resp) => {
          this.fromSelect = resp.data;

          this.ClasseService.getSelectfiliere(this.classeForm.get('filiere').value).
            then((resp) => {
              this.filiereSelect = resp.data; console.log(this.filiereSelect[0]);
               console.log(this.fromSelect[0]);
              this.ClasseService.createClasse({
                nom: this.classeForm.get('nom').value,
                formation: this.fromSelect[0],
                filiere: this.filiereSelect[0]
              }).then(() => {
                console.warn("success");
                this.router.navigate(['/table_classe']);
              })

            });
        });


    }

  }


}
