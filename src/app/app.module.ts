import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from'@angular//common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeadComponent } from './menu-headFolder/menu-head/menu-head.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { TableFormationComponent } from './table-formationFolder/table-formation/table-formation.component';
import { TableFiliereComponent } from './table-filiere/table-filiere.component';
import { Routes, RouterModule } from '@angular/router';
import { TableClasseComponent } from './table-classe/table-classe.component';
import { TableTPComponent } from './table-tp/table-tp.component';
import { TableGroupTPComponent } from './table-group-tp/table-group-tp.component';
import { TableEtudiantComponent } from './table-etudiant/table-etudiant.component';
import { TableEnseignantComponent } from './table-enseignant/table-enseignant.component';
import {TableFormationService} from './table-formationFolder/services/table-formation.service';
import { from } from 'rxjs';

import { CreateFormationComponent } from './table-formationFolder/create-formation/create-formation.component';


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
    
  ],
  imports: [
    
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
