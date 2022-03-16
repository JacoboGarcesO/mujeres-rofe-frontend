import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDetailContainerComponent } from './form-detail-container.component';
import { FormDetailModule } from 'src/app/ui/blocks/form-detail/form-detail.module';

@NgModule({
  declarations: [
    FormDetailContainerComponent,
  ],
  imports: [
    CommonModule,
    FormDetailModule,
  ],
  exports: [
    FormDetailContainerComponent,
  ],
})
export class FormDetailContainerModule { }
