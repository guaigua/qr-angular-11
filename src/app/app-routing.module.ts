import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ScannerComponent } from './views/scanner/scanner.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: ScannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
