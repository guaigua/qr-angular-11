import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgQrScannerModule } from 'angular2-qrscanner';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgQrScannerModule,
    ZXingScannerModule,
  ]
})
export class ViewsModule { }
