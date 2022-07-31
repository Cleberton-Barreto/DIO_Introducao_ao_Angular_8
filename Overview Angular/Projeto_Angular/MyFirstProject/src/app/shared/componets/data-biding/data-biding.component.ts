import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  nome: string = 'Cleberton Junior'

  imgUrl = 'https://picsum.photos/200/300'
  imgAlt = 'nome da bagaçeira'
  inputText = ''
  textRed = false

  buttonText = 'Clique aqui'

  constructor() { }

  ngOnInit(): void {

  }

  retornaNome(){
    return this.nome
  }

  clicou(){
    this.textRed = true
    console.log('click works')
  }

}
