import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { ClasseService } from '../classe.service'
import { ClassEtudiant } from './classe-etudiant.module'
@Component({
  selector: 'app-classe-etudiant',
  templateUrl: './classe-etudiant.component.html',
  styleUrls: ['./classe-etudiant.component.css']
})
export class ClasseEtudiantComponent implements OnInit {
  private etduiants;
  tpdata: any;
  private singleEtudiant;
  private classEtudiant: ClassEtudiant[] = [
    {
      username: "",
      email: "",
      password: "",



    }

  ];
  tp: any;




  constructor(private ClasseService: ClasseService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get("dynamicParameter");
    this.ClasseService.getEtudiant(id).then((resp) => {
      this.etduiants = resp.data; console.log(this.etduiants);

      this.etduiants.forEach(element => {

        let id = JSON.parse(element[("etudiant_id")]);


        this.getClass(id)

      })


    }

    );


  }


  getClass(id) {

    this.ClasseService.getEtudiantclasse(id).then((resp) => {
      this.singleEtudiant = resp.data;
     
      this.classEtudiant.push({

        username: this.singleEtudiant[0]["username"],
        email: this.singleEtudiant[0]["email"],
        password: this.singleEtudiant[0]["password"],

      });

    })

  }

}