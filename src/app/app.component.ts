import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  curso : string
  periodo : number
  disciplina : string
  
  constructor(){
    this.curso = 'Informática'
    this.periodo = 4
    this.disciplina = ''
  }
}
