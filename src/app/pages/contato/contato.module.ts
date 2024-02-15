import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContateNosComponent } from './contate-nos/contate-nos.component';



@NgModule({
  declarations: [
    ContateNosComponent
  ],
  exports:[
    ContateNosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContatoModule { }
