import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
