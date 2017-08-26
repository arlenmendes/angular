import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'arlenmendes.com'

  urlImagem: string = 'http://lorempixel.com/400/200/'

  valorAtual: string = ""

  isMouseOver: boolean = false

  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }

  botaoClicado(){
    alert('Clicou safado')
  }

  mouseOver(){
    this.isMouseOver = !this.isMouseOver
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  constructor() { }

  ngOnInit() {
  }

}
