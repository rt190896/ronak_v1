import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Formula-changes';
  width: number = 0;
  length: number = 0;
  Profile: number = 0;
  Qty: number = 0;

  calculate() {
    debugger;
    return (this.width * this.Profile / 2) * this.Qty
  }
}
