import { Component, OnInit,Input } from '@angular/core';
import{formation} from '../model/table-formation'
import{TableFormationService} from '../services/table-formation.service'
import { from } from 'rxjs';
import { Observable } from "rxjs";
import { ObservableInput } from "ngx-observable-input";
@Component({
  selector: 'app-table-formation',
  templateUrl: './table-formation.component.html',
  styleUrls: ['./table-formation.component.css'],
 
  
  
})
export class TableFormationComponent implements OnInit {
public formations : formation[] ;

  constructor(private tableformationservice : TableFormationService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(): void {
 this.tableformationservice.getAllFormation().subscribe(formations=> console.log(formations));
// this.utilisateurservice.getUtilisateurs().subscribe(utilisateurs => this.utilisateurs = utilisateurs);
this.tableformationservice.getAllFormation().subscribe(formations=>{this.formations = formations},err=>{});
console.log(this.formations)  
  
 
  }
}
