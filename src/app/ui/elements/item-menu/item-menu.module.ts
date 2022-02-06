import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemMenuComponent } from './item-menu.component';
import { TextModule } from '../text/text.module';
import { ImageModule } from '../image/image.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ItemMenuComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
    PipesModule,
    ImageModule,
  ],
  exports: [
    ItemMenuComponent,
  ],
})
export class ItemMenuModule { }
