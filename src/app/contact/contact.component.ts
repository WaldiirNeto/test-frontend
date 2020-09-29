import { BreakpointObserver } from '@angular/cdk/layout';
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
  constructor(private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
    // 1256
    //760
    this.breakpointObserver.observe([
      '(min-width: 375px)',
    ]).subscribe((result) => {

      if (result.matches) {
        this.isDesktop = true;
      } else {
        this.isDesktop = false;
      }
      console.log(this.isDesktop);
    })
    this.breakpointObserver.observe([
      '(min-width: 760px)',
    ]).subscribe((result) => {

      if (result.matches) {
        this.isDesktop = true;
      } else {
        this.isDesktop = false;
      }
      console.log(`760,`, this.isDesktop);
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
