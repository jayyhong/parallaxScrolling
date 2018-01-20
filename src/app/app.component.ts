import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  topDistance: any;
  one: any;
  two: any;
  three: any;
  four: any;
  five: any;
  fiveBg: any;
  boat: any;

  text: any;

  constructor () {
    this.scrollEvent();
  }

  ngOnInit() {
    this.one = document.getElementsByClassName('one');
    this.two = document.getElementsByClassName('two');
    this.three = document.getElementsByClassName('three');
    this.four = document.getElementsByClassName('four');
    this.five = document.getElementsByClassName('five');
    this.fiveBg = document.getElementsByClassName('fiveBg');
    this.boat = document.getElementsByClassName('boat');
  }

  scrollEvent () {
    window.addEventListener ("scroll", (event) => {
      this.topDistance = window.pageYOffset;
      this.five[0].style.marginTop = - this.topDistance + 100 + "px";
      this.fiveBg[0].style.marginTop = - this.topDistance + 1100 + "px";
      this.boat[0].style.marginTop = - this.topDistance / 2 + 700 + "px";
      this.one[0].style.marginTop = - this.topDistance / 2 + 800 + "px";
      this.two[0].style.marginTop = - this.topDistance / 50 - 200 + "px";
      this.three[0].style.marginTop = this.topDistance / 2 -200 + "px";
    })
  }



}
