import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeModule} from './pages/home/home.module';//IMPORTANDO MODULOS
import {ContatoModule} from './pages/contato/contato.module';
import {ProjetosModule} from './pages/projetos/projetos.module';
import {SobreModule} from './pages/sobre/sobre.module';

import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    FooterNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContatoModule,
    ProjetosModule,
    SobreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
