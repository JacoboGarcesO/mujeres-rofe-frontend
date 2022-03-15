import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDetailComponent } from './form-detail.component';
import { FormModule } from '../../forms/form/form.module';
import { CardModule } from '../../elements/card/card.module';
import { HomeBackgroundModule } from '../../elements/home-background/home-background.module';

@NgModule({
  declarations: [
    FormDetailComponent,
  ],
  imports: [
    CommonModule,
    FormModule,
    CardModule,
    HomeBackgroundModule,
  ],
  exports: [
    FormDetailComponent,
  ],
})
export class FormDetailModule { }
