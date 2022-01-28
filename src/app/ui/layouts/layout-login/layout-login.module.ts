import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutLoginComponent } from './layout-login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutLoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LayoutLoginComponent,
  ],
})
export class LayoutLoginModule { }
