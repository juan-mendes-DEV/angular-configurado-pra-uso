import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/home/inicio/inicio.component';
import { ContateNosComponent } from './pages/contato/contate-nos/contate-nos.component';
import { ProjetosFeitoComponent } from './pages/projetos/projetos-feito/projetos-feito.component';
import { MoreComponent } from './pages/sobre/more/more.component';

const routes: Routes = [
  {
    path:'', component:InicioComponent, pathMatch:'full'
   },
   {
    path:'contato', component:ContateNosComponent
   },
   {
    path:'projetos', component:ProjetosFeitoComponent
   },
   {
    path:'sobre', component:MoreComponent
   },
   {
    path:'**', redirectTo:''
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
