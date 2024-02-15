import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreComponent } from './more/more.component';



@NgModule({
  declarations: [
    MoreComponent
  ],
  exports:[
  MoreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SobreModule { }
