import { NgModule } from '@angular/core';
import { NoimagePipe } from './noimage.pipe';

@NgModule({
  declarations: [
    NoimagePipe,
  ],
  exports: [
    NoimagePipe,
  ],
})
export class PipesModule { }
