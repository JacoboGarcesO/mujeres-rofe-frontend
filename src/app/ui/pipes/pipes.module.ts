import { NgModule } from '@angular/core';
import { NoimagePipe } from './noimage.pipe';
import { ChannelPipe } from './channel.pipe';

@NgModule({
  declarations: [
    NoimagePipe,
    ChannelPipe,
  ],
  exports: [
    NoimagePipe,
    ChannelPipe,
  ],
})
export class PipesModule { }
