import { NgModule } from '@angular/core';
import { NoimagePipe } from './noimage.pipe';
import { ChannelPipe } from './channel.pipe';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    NoimagePipe,
    ChannelPipe,
    CapitalizePipe,
  ],
  exports: [
    NoimagePipe,
    ChannelPipe,
    CapitalizePipe,
  ],
})
export class PipesModule { }
