import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elsoprojekt';
  tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() {
    console.log(this.tomb.filter(function (number) {
      return number === 2;
    }));
    console.log(this.tomb.filter((number: number) => number === 2));
    console.log(this.tomb.map((number: number) => number * 2));
    console.log(this.tomb.reduce((x, y) => x + y));
  }
}
