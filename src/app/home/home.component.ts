import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isDesktop: boolean;
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([
      '(min-width: 757px)'
    ]).subscribe((result) => {

      if (result.matches) {
        this.isDesktop = true;
      } else {
        this.isDesktop = false;
      }
      console.log(this.isDesktop);
    })
  }

}
