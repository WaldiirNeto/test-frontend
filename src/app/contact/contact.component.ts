import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isDesktop: boolean;
  contactForm: FormGroup
  emailFormControl: FormControl;
  xsmall = false;
  small = false;
  medium = false;
  large = false;
  xlarge = false;
  medium_small = true;
  constructor(private breakpointObserver: BreakpointObserver, private formBuilder: FormBuilder) { }

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
        this.medium_small = true;
      }
      if (result.breakpoints[Breakpoints.Small]) {
        this.small = true;

        this.xsmall = false;
        this.medium = false;
        this.large = false;
        this.xlarge = false;
        this.medium_small = true;
        console.log('Small');
        // handle Small breakpoint
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        this.medium = true;

        this.small = false;
        this.xsmall = false;
        this.large = false;
        this.xlarge = false;
        this.medium_small = true;
        console.log('Medium');
        // handle Medium breakpoint
      }
      if (result.breakpoints[Breakpoints.Large]) {
        this.large = true;

        this.medium = false;
        this.small = false;
        this.xsmall = false;
        this.xlarge = false;
        this.medium_small = false;
        // handle Large breakpoint
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        this.xlarge = true;

        this.medium = false;
        this.small = false;
        this.xsmall = false;
        this.large = false;
        this.medium_small = false;
        console.log('XLarge');
        // handle XLarge breakpoint
      }
    })

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    })
  }
  onSubmit() {
    console.log('Okay')
  }
}
