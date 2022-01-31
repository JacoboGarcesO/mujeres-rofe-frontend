import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemMenuComponent } from './item-menu.component';
import { TextModule } from '../text/text.module';
import { ImageModule } from '../image/image.module';

@NgModule({
  declarations: [
    ItemMenuComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
    ImageModule,
  ],
  exports: [
    ItemMenuComponent,
  ],
})
export class ItemMenuModule { }
