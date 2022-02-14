import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRegisterComponent } from './layout-register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutRegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LayoutRegisterComponent,
  ],
})
export class LayoutRegisterModule { }
