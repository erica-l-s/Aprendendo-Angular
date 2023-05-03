import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 produtos:string[] = []
 menuType:string = ""

  constructor(){
  this.produtos = [
    "mouse",
    "teclado"
  ]
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  adicionar(){
    this.produtos.push("erica")
  }

  remover(index: number){
    this.produtos.splice(index,1)

  }


}
