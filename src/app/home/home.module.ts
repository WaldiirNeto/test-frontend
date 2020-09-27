import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from '../shared/header/header.module';
@NgModule({
    declarations: [
        HomeComponent,
        CountdownComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        HomeRoutingModule,
        MatGridListModule,
    ]
})
export class HomeModule { }
