import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle';
  isAliveCheckedSample:boolean = true

  disposeCheckSample():void{
    this.isAliveCheckedSample = false
  }
}
