import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  pct = 0;

  constructor() {}

  ngOnInit() {
    let i = setInterval(() => {
      if (this.pct < 1.0) {
        this.pct += 0.01;
      } else {
        clearInterval(i);
      }
    }, 40);
  }
}
