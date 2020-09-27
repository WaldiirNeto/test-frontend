import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HeaderModule } from '../shared/header/header.module';
@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ContactRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
