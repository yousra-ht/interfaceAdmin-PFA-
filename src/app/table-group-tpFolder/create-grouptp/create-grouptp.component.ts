import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TableService } from '../table.service';

@Component({
  selector: 'app-create-grouptp',
  templateUrl: './create-grouptp.component.html',
  styleUrls: ['./create-grouptp.component.css']
})
export class CreateGrouptpComponent implements OnInit {
  private classSelect = [];
  private tp = [];
  private enseignantSelect = [];
  classes: any;
  enseignants: any;
  tps: any;




  constructor(private tableservice: TableService, private router: Router) { }
  groupForm = new FormGroup({
    nom: new FormControl(''),
    enseignant: new FormControl(''),
    classe: new FormControl(''),
    tp: new FormControl(''),

  });
  ngOnInit() {
    this.tableservice.getALLclasse().then((resp) => { this.classes = resp.data; console.log(this.classes) });
    this.tableservice.getallEnseignant().then((resp) => { this.enseignants = resp.data; console.log(this.enseignants) });
    this.tableservice.getallTps().then((resp) => { this.tps = resp.data; console.log(this.tps) });
  }

  addClasse(e) {
    e.stopPropagation()
    {

      this.tableservice.getSelectenseignant(this.groupForm.get('enseignant').value).
        then((resp) => {
          this.enseignantSelect = resp.data;
          this.tableservice.getSelectclasse(this.groupForm.get('classe').value).
            then((resp) => {
              this.classSelect = resp.data;

              this.tableservice.getSelecttp(this.groupForm.get('tp').value).
                then((resp) => {
                  this.tp = resp.data; console.log(this.tp[0]); console.log(this.classSelect[0]);

                  this.tableservice.createGroup({
                    nom: this.groupForm.get('nom').value,
                    travauxPratique: this.tp[0],
                    classe: this.classSelect[0],
                    enseigenant: this.enseignantSelect[0]
                  }).then(() => {
                    console.warn("success");
                    this.router.navigate(['/table-group-tp']);
                  })

                });
            });
        });

    }

  }

}
