import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'channel',
})
export class ChannelPipe implements PipeTransform {

  transform(channel: string): string {
    return this.getChannel(channel);
  }

  private getChannel(channel: any): string {
    if(channel == 'network')  return 'Red';
    if(channel == 'opportunities')  return 'Oportunidades';
    if(channel == 'training')  return 'Formación';
    if(channel == 'business')  return 'Emprendimiento';
    if(channel == 'contact')  return 'Contacto';
  }
}
