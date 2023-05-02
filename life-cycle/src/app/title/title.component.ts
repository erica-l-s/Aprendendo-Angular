import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome:string = ''
   
  constructor(){
    console.log(`construtor ${this.nome}`)
  }
  ngOnChanges(): void {
   console.log(`onChange ${this.nome}`)
  }
  ngOnInit(): void {
    this.nome = this.nome + 'x'
   this.nome = `ola ${this.nome}`
  }
}
