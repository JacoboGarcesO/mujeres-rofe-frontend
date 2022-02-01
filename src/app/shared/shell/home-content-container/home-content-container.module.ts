import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContentContainerComponent } from './home-content-container.component';
import { HomeContentModule } from 'src/app/ui/blocks/home-content/home-content.module';

@NgModule({
  declarations: [
    HomeContentContainerComponent,
  ],
  imports: [
    CommonModule,
    HomeContentModule,
  ],
  exports: [
    HomeContentContainerComponent,
  ],
})
export class HomeContentContainerModule { }
