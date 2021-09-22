import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableFormationComponent } from './table-formationFolder/table-formation/table-formation.component';
import { TableFiliereComponent } from './table-filiereFolder/table-filiere/table-filiere.component';
import { TableClasseComponent } from './table-classeFolder/table-classe/table-classe.component';
import { TableTPComponent } from './table-tpFolder/table-tp/table-tp.component';
import { TableGroupTPComponent } from './table-group-tpFolder/table-group-tp/table-group-tp.component';
import { TableEtudiantComponent } from './table-etudiantfolder/table-etudiant/table-etudiant.component';
import { TableEnseignantComponent } from './table-enseignantFolder/table-enseignant/table-enseignant.component';
import { CreateFormationComponent } from './table-formationFolder/create-formation/create-formation.component'
import { CreateFiliereComponent } from './table-filiereFolder/create-filiere/create-filiere.component';
import { CreateClasseComponent } from './table-classeFolder/create-classe/create-classe.component';
import { CreateTpComponent } from './table-tpFolder/create-tp/create-tp.component';
import { CreateGrouptpComponent } from './table-group-tpFolder/create-grouptp/create-grouptp.component';
import { CreateEtudiantComponent } from './table-etudiantfolder/create-etudiant/create-etudiant.component';
import { CreateEnseignantComponent } from './table-enseignantFolder/create-enseignant/create-enseignant.component'
import { ClasseEtudiantComponent } from './table-classeFolder/classe-etudiant/classe-etudiant.component';
const routes: Routes = [

  { path: 'ajouter-enseignant', component: CreateEnseignantComponent },
  { path: 'ajouter-etudiant', component: CreateEtudiantComponent },
  { path: 'ajouter-groupTP', component: CreateGrouptpComponent },
  { path: 'ajouter-tp', component: CreateTpComponent },
  { path: 'ajouter-classe', component: CreateClasseComponent },
  { path: 'ajouter-filiere', component: CreateFiliereComponent },
  { path: 'ajouter-formation', component: CreateFormationComponent },
  { path: 'table-enseignant', component: TableEnseignantComponent },
  { path: 'table-etudiant', component: TableEtudiantComponent },
  { path: 'table-group-tp', component: TableGroupTPComponent },
  { path: 'table_TPs', component: TableTPComponent },
  { path: 'table_classe', component: TableClasseComponent },
  { path: 'table_formation', component: TableFormationComponent },
  { path: 'table_filiere', component: TableFiliereComponent },
  { path: 'ListeEtudiant/:dynamicParameter', component: ClasseEtudiantComponent },
  { path: 'table_filiere/:dynamicParameter', component: TableFiliereComponent },
  { path: 'table_classe/:dynamicParameter', component: TableClasseComponent },
  { path: 'table-etudiant/:dynamicParameter', component: TableEtudiantComponent },
  { path: 'table-enseignant/:dynamicParameter', component: TableEnseignantComponent },
  { path: 'table_formation/:dynamicParameter', component: TableFormationComponent },
  { path: 'table-group-tp/:dynamicParameter', component: TableGroupTPComponent },
  { path: 'table_TPs/:dynamicParameter', component: TableTPComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
