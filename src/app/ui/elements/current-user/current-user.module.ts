import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentUserComponent } from './current-user.component';
import { TextModule } from '../text/text.module';
import { ImageModule } from '../image/image.module';

@NgModule({
  declarations: [
    CurrentUserComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
    ImageModule,
  ],
  exports: [
    CurrentUserComponent,
  ],
})
export class CurrentUserModule { }
