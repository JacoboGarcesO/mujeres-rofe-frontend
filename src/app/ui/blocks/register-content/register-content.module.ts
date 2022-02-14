import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterContentComponent } from './register-content.component';
import { HomeBackgroundModule } from '../../elements/home-background/home-background.module';
import { CardModule } from '../../elements/card/card.module';
import { FormUserModule } from '../../forms/form-user/form-user.module';

@NgModule({
  declarations: [
    RegisterContentComponent,
  ],
  imports: [
    CommonModule,
    HomeBackgroundModule,
    CardModule,
    FormUserModule,
  ],
  exports: [
    RegisterContentComponent,
  ],
})
export class RegisterContentModule { }
