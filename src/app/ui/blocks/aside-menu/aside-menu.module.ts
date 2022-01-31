import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuComponent } from './aside-menu.component';
import { ImageModule } from '../../elements/image/image.module';
import { TextModule } from '../../elements/text/text.module';
import { ItemMenuModule } from '../../elements/item-menu/item-menu.module';
import { CurrentUserModule } from '../../elements/current-user/current-user.module';

@NgModule({
  declarations: [
    AsideMenuComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    TextModule,
    ItemMenuModule,
    CurrentUserModule,
  ],
  exports: [
    AsideMenuComponent,
  ],
})
export class AsideMenuModule { }
