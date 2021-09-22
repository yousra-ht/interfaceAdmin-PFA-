import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular//common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeadComponent } from './menu-headFolder/menu-head/menu-head.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { TableFormationComponent } from './table-formationFolder/table-formation/table-formation.component';
import { TableFiliereComponent } from './table-filiereFolder/table-filiere/table-filiere.component';
import { Routes, RouterModule } from '@angular/router';
import { TableClasseComponent } from './table-classeFolder/table-classe/table-classe.component';
import { TableTPComponent } from './table-tpFolder/table-tp/table-tp.component';
import { TableGroupTPComponent } from './table-group-tpFolder/table-group-tp/table-group-tp.component';
import { TableEtudiantComponent } from './table-etudiantfolder/table-etudiant/table-etudiant.component';
import { TableEnseignantComponent } from './table-enseignantFolder/table-enseignant/table-enseignant.component';
import { TableFormationService } from './table-formationFolder/services/table-formation.service';
import { CreateFormationComponent } from './table-formationFolder/create-formation/create-formation.component';
import { CreateFiliereComponent } from './table-filiereFolder/create-filiere/create-filiere.component';
import { CreateClasseComponent } from './table-classeFolder/create-classe/create-classe.component';
import { CreateTpComponent } from './table-tpFolder/create-tp/create-tp.component';
import { CreateGrouptpComponent } from './table-group-tpFolder/create-grouptp/create-grouptp.component';
import { CreateEtudiantComponent } from './table-etudiantfolder/create-etudiant/create-etudiant.component';
import { CreateEnseignantComponent } from './table-enseignantFolder/create-enseignant/create-enseignant.component';
import { ClasseEtudiantComponent } from './table-classeFolder/classe-etudiant/classe-etudiant.component';
import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [

  { path: 'ajouter-formation', component: CreateFormationComponent },
  { path: 'table-enseignant', component: TableEnseignantComponent },
  { path: 'table-etudiant', component: TableEtudiantComponent },
  { path: 'table-group-tp', component: TableGroupTPComponent },
  { path: 'table_TPs', component: TableTPComponent },
  { path: 'table_classe', component: TableClasseComponent },
  { path: 'table_formation', component: TableFormationComponent },
  { path: 'table_filiere', component: TableFiliereComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    MenuHeadComponent,
    MenuLeftComponent,
    TableFormationComponent,
    TableFiliereComponent,
    TableClasseComponent,
    TableTPComponent,
    TableGroupTPComponent,
    TableEtudiantComponent,
    TableEnseignantComponent,
    CreateFormationComponent,
    CreateFiliereComponent,
    CreateClasseComponent,
    CreateTpComponent,
    CreateGrouptpComponent,
    CreateEtudiantComponent,
    CreateEnseignantComponent,
    ClasseEtudiantComponent,


  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,


  ],
  exports: [RouterModule],
  providers: [TableFormationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
