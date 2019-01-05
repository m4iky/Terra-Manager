import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './tablero/tablero.component';
import { TerritorioComponent } from './territorio/territorio.component';




const appRouter: Routes = [

  { path: 'home', component: TableroComponent},
  { path: 'territorio/:id', component: TerritorioComponent},

  {	path: '**', redirectTo: 'home'}





]









export const AppRoutingModule = RouterModule.forRoot( appRouter );