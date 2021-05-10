import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgQrScannerModule } from 'angular2-qrscanner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgQrScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
