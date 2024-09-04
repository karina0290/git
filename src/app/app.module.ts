import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExibeDisciplinaComponent } from './exibe-disciplina/exibe-disciplina.component';
import { AulasComponent } from './aulas/aulas.component';
import { ExibeDisciplinasComponent } from './exibe-disciplinas/exibe-disciplinas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExibeDisciplinaComponent,
    AulasComponent,
    ExibeDisciplinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
