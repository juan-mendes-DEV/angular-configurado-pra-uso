import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosFeitoComponent } from './projetos-feito/projetos-feito.component';



@NgModule({
  declarations: [
    ProjetosFeitoComponent
  ],
  exports:[
    ProjetosFeitoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjetosModule { }
