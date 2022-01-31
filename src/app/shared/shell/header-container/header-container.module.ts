import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container.component';
import { NavbarModule } from 'src/app/ui/blocks/navbar/navbar.module';

@NgModule({
  declarations: [
    HeaderContainerComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
  ],
  exports: [
    HeaderContainerComponent,
  ],
})
export class HeaderContainerModule { }
