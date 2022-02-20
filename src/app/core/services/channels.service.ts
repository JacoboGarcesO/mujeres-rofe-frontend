import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChannelEnum } from '../enums/channel.enum';
import { ChannelModel } from '../models/channel.model';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  
  getChannels(): Observable<ChannelModel[]> {
    const channels = [
      { 
        link: '', 
        name: 'Inicio',  
        description: 'Volver a la página de inicio', 
        icon: 'assets/img/home.png', 
        banner: 'assets/img/contactanos-banner.png',
        type: ChannelEnum.home,
      },
      { 
        link: 'channels/network', 
        name: 'Red', 
        description: 'Espacio de conexión y apoyo', 
        icon: 'assets/img/red.png', 
        banner: 'assets/img/red-banner.png',
        type: ChannelEnum.network,
      },
      { 
        link: 'channels/opportunities', 
        name: 'Oportunidades', 
        description: 'Acceso a información para mujeres', 
        icon: 'assets/img/oportunidades.png', 
        banner: 'assets/img/oportunidades-banner.png',
        type: ChannelEnum.opportunities,
      },
      { 
        link: 'channels/training', 
        name: 'Formación', 
        description: 'Cursos, talleres y charlas', 
        icon: 'assets/img/formacion.png', 
        banner: 'assets/img/formacion-banner.png',
        type: ChannelEnum.training,
      },
      { 
        link: 'channels/business', 
        name: 'Emprendimiento', 
        description: 'Acceso a asesorías y capital semilla', 
        icon: 'assets/img/emprendimiento.png', 
        banner: 'assets/img/emprendimiento-banner.png',
        type: ChannelEnum.business,
      },
      { 
        link: 'channels/contact', 
        name: 'Contáctanos', 
        description: 'Apoyo y soporte', 
        icon: 'assets/img/logo-4.png', 
        banner: 'assets/img/contactanos-banner.png',
        type: ChannelEnum.contact,
      },
      { 
        link: 'admin', 
        name: 'Administrador', 
        icon: 'assets/img/admin.png', 
        banner: 'assets/img/contactanos-banner.png',
        type: ChannelEnum.admin,
      },
    ];

    return of(channels);
  }
}
