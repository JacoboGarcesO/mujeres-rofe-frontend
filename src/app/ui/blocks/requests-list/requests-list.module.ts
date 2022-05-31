import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsListComponent } from './requests-list.component';
import { RequestModule } from '../../elements/request/request.module';
import { TextModule } from '../../elements/text/text.module';

@NgModule({
  declarations: [
    RequestsListComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
    RequestModule,
  ],
  exports: [
    RequestsListComponent,
  ],
})
export class RequestsListModule { }
