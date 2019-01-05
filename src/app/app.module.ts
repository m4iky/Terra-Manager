import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule, FormsModule} from '@angular/forms'
// import {CommonModule} from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// FIRESTORE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// COMPONENTES
import { TerritoriosAdminComponent } from './admin/territorios-admin/territorios-admin.component';
import { UsuariosAdminComponent } from './admin/usuarios-admin/usuarios-admin.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TerritoriosListaComponent } from './territorios-lista/territorios-lista.component';
import { TerritorioComponent } from './territorio/territorio.component';
import { TableroComponent } from './tablero/tablero.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TerritoriosAdminComponent,
    UsuariosAdminComponent,
    SidebarComponent,
    TerritoriosListaComponent,
    TerritorioComponent,
    TableroComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
    // AngularFireStorageModule,
    // AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
