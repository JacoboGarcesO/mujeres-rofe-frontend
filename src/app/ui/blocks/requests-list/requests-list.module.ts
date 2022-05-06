import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsListComponent } from './requests-list.component';
import { RequestModule } from '../../elements/request/request.module';

@NgModule({
  declarations: [
    RequestsListComponent,
  ],
  imports: [
    CommonModule,
    RequestModule,
  ],
  exports: [
    RequestsListComponent,
  ],
})
export class RequestsListModule { }
