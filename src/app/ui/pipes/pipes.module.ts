import { NgModule } from '@angular/core';
import { NoimagePipe } from './noimage.pipe';
import { ChannelPipe } from './channel.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { SanitizierPipe } from './sanitizier.pipe';
import { ErrorsPipe } from './errors.pipe';

@NgModule({
  declarations: [
    NoimagePipe,
    ChannelPipe,
    CapitalizePipe,
    SanitizierPipe,
    ErrorsPipe,
  ],
  exports: [
    NoimagePipe,
    ChannelPipe,
    CapitalizePipe,
    SanitizierPipe,
    ErrorsPipe,
  ],
})
export class PipesModule { }
