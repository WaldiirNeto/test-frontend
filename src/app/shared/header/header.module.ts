import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
