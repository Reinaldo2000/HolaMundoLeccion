import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaComponent } from './components/ruta/ruta.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

const routes: Routes = [
  {path:'quienes-comos', component: QuienesSomosComponent},
  {path:'ruta', component: RutaComponent},
  {path:'rutas', component: RutasComponent},
  {path: 'ruta/:id', component:RutaComponent},
  {path: '**',pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
