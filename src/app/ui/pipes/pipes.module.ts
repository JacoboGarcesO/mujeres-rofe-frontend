import { NgModule } from '@angular/core';
import { NoimagePipe } from './noimage.pipe';
import { ChannelPipe } from './channel.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { SanitizierPipe } from './sanitizier.pipe';

@NgModule({
  declarations: [
    NoimagePipe,
    ChannelPipe,
    CapitalizePipe,
    SanitizierPipe,
  ],
  exports: [
    NoimagePipe,
    ChannelPipe,
    CapitalizePipe,
    SanitizierPipe,
  ],
})
export class PipesModule { }
