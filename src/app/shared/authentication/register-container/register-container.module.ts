import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterContainerComponent } from './register-container.component';
import { RegisterContentModule } from 'src/app/ui/blocks/register-content/register-content.module';

@NgModule({
  declarations: [
    RegisterContainerComponent,
  ],
  imports: [
    CommonModule,
    RegisterContentModule,
  ],
  exports: [
    RegisterContainerComponent,
  ],
})
export class RegisterContainerModule { }
