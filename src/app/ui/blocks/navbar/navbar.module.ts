import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ButtonBurguerModule } from '../../elements/button-burguer/button-burguer.module';
import { AsideMenuModule } from '../aside-menu/aside-menu.module';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ButtonBurguerModule,
    AsideMenuModule,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule { }
