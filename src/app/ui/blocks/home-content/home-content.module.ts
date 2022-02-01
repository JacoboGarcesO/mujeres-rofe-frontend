import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './home-content.component';
import { ImageModule } from '../../elements/image/image.module';
import { HomeBackgroundModule } from '../../elements/home-background/home-background.module';

@NgModule({
  declarations: [
    HomeContentComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    HomeBackgroundModule,
  ],
  exports: [
    HomeContentComponent,
  ],
})
export class HomeContentModule { }
