import { Component, OnInit, ɵConsole } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  breakpoint: number;
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
