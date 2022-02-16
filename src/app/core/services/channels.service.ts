import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChannelModel } from '../models/channel.model';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  
  getChannels(): Observable<ChannelModel[]> {
    const hobbies = [
      { 
        link: 'channels/network', 
        name: 'Red', 
        description: 'Espacio de conexión y apoyo', 
        icon: 'assets/img/red.png', 
        banner: 'assets/img/contactanos-banner.png',
      },
      { 
        link: 'channels/opportunities', 
        name: 'Oportunidades', 
        description: 'Acceso a información para mujeres', 
        icon: 'assets/img/oportunidades.png', 
        banner: 'assets/img/contactanos-banner.png',
      },
      { 
        link: 'channels/training', 
        name: 'Formación', 
        description: 'Cursos, talleres y charlas', 
        icon: 'assets/img/formacion.png', 
        banner: 'assets/img/contactanos-banner.png',
      },
      { 
        link: 'channels/business', 
        name: 'Emprendimiento', 
        description: 'Acceso a asesorías y capital semilla', 
        icon: 'assets/img/emprendimiento.png', 
        banner: 'assets/img/contactanos-banner.png',
      },
      { 
        link: 'channels/contact', 
        name: 'Contáctanos', 
        description: 'Apoyo y soporte', 
        icon: 'assets/img/logo-4.png', 
        banner: 'assets/img/contactanos-banner.png',
      },
      { 
        link: 'admin', 
        name: 'Administrador', 
        icon: 'assets/img/logo-4.png', 
        banner: 'assets/img/contactanos-banner.png',
      },
    ];

    return of(hobbies);
  }
}
