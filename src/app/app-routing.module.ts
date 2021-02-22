import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableFormationComponent } from './table-formationFolder/table-formation/table-formation.component';
import { MenuHeadComponent } from './menu-headFolder/menu-head/menu-head.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { TableFiliereComponent } from './table-filiere/table-filiere.component';
import { TableClasseComponent } from './table-classe/table-classe.component';
import { TableTPComponent } from './table-tp/table-tp.component';
import { TableGroupTPComponent } from './table-group-tp/table-group-tp.component';
import { TableEtudiantComponent } from './table-etudiant/table-etudiant.component';
import { TableEnseignantComponent } from './table-enseignant/table-enseignant.component';
import {CreateFormationComponent} from './table-formationFolder/create-formation/create-formation.component'
const routes: Routes = [
  {path :'ajouter-formation' , component :CreateFormationComponent},
  {path :'table-enseignant' , component :TableEnseignantComponent}, 
  {path :'table-etudiant' , component :TableEtudiantComponent}, 
  {path :'table-group-tp' , component :TableGroupTPComponent}, 
  {path :'table_TPs' , component :TableTPComponent}, 
  {path :'table_classe' , component :TableClasseComponent}, 
  {path :'table_formation' , component :TableFormationComponent }, 
  {path :'table_filiere' , component : TableFiliereComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
