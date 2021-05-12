import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { ScannerComponent } from './scanner/scanner.component';



@NgModule({
  declarations: [
    HomeComponent,
    ScannerComponent
  ],
  imports: [
    CommonModule,
    NgQrScannerModule,
    ZXingScannerModule,
  ]
})
export class ViewsModule { }
