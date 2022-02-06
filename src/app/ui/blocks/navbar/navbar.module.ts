import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ButtonBurguerModule } from '../../elements/button-burguer/button-burguer.module';
import { AsideMenuModule } from '../aside-menu/aside-menu.module';
import { ImageModule } from '../../elements/image/image.module';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ButtonBurguerModule,
    AsideMenuModule,
    ImageModule,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule { }
