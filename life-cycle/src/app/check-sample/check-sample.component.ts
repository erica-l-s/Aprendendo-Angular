import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent

  implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade: number = 0

  constructor() { }

 

  adicionar() {
    this.quantidade += 1
  }
  decrementar() {
    this.quantidade -= 1
  }

  //quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  // depois da inicializaçao da vier
  ngAfterViewInit(): void {

    console.log('ngAfterViewInit')
  }

  //apos alguma alteraçao verifica o connteudo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  // apos alguma alteraçao  verifica view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }


  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnDestroy(): void {
    console.log('goodbye my friend')
  }




}
