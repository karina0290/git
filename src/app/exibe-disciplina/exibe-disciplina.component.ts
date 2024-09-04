import { Component } from '@angular/core';
import { Disciplina } from './disciplina';

@Component({
  selector: 'app-exibe-disciplina',
  templateUrl: './exibe-disciplina.component.html',
  styleUrl: './exibe-disciplina.component.css'
})
export class ExibeDisciplinaComponent {
  disciplinas: Disciplina[]
  logoifrn: string
  constructor(){
    this.logoifrn = 
    'https://oppep.ifrn.edu.br/media/img/logoifrn.png'
    this.disciplinas = [
    ]
  }
  adicionar(nome:string, 
           doc:string,    
           ch:number){
    if (nome && doc && ch){
      const disc = new Disciplina (nome, doc, ch);
      this.disciplinas.push(disc)

  }
  }
}
/*
new Disciplina ('PPI','Bruno',100),
new Disciplina ('PDS','Alvaro',170),
new Disciplina ('ESP','Erika',80),
new Disciplina ('BIO','Andréa',80)
*/