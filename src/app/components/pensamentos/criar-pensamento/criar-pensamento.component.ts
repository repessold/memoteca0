import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento={
    id: '1',
    conteudo: 'Aqui vai o pensamento',
    autoria: 'Dev',
    modelo:'teste',
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("Novo pensamento criado!")
  }

  cancelar(){
    alert("Pensamento cancelado.")
  }

}
