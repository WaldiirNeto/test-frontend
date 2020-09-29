import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  xsmall = false;
  small = false;
  medium = false;
  large = false;
  xlarge = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((result) => {

      if (result.breakpoints[Breakpoints.XSmall]) {
        // handle XSmall breakpoint
        this.xsmall = true;

        this.small = false;
        this.medium = false;
        this.large = false;
        this.xlarge = false;
      }
      if (result.breakpoints[Breakpoints.Small]) {
        this.small = true;

        this.xsmall = false;
        this.medium = false;
        this.large = false;
        this.xlarge = false;
        console.log('Small');
        // handle Small breakpoint
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        this.medium = true;

        this.small = false;
        this.xsmall = false;
        this.large = false;
        this.xlarge = false
        console.log('Medium');
        // handle Medium breakpoint
      }
      if (result.breakpoints[Breakpoints.Large]) {
        this.large = true;

        this.medium = false;
        this.small = false;
        this.xsmall = false;
        this.xlarge = false;
        // handle Large breakpoint
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        this.xlarge = true;

        this.medium = false;
        this.small = false;
        this.xsmall = false;
        this.large = false;
        console.log('XLarge');
        // handle XLarge breakpoint
      }
    })
  }
}
