import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OptionModel } from '../models/option.model';

@Injectable({
  providedIn: 'root',
})
export class HobbiesService {
  
  getHobbies(): Observable<OptionModel[]> {
    const hobbies = [
      { id: 'cantar', label: 'Cantar' },
      { id: 'bailar', label: 'Bailar' },
      { id: 'cocinar', label: 'Cocinar' },
      { id: 'leer', label: 'Leer' },
      { id: 'viajar', label: 'Viajar' },
      { id: 'dibujar', label: 'Dibujar' },
      { id: 'coleccionar', label: 'Coleccionar' },
      { id: 'jugar', label: 'Jugar' },
      { id: 'investigar', label: 'Investigar' },
      { id: 'rompecabezas', label: 'Armar rompecabezas' },
      { id: 'musica', label: 'Escuchar música' },
      { id: 'tocarInstrumento', label: 'Tocar instrumentos' },
      { id: 'comprar', label: 'Comprar' },
    ];

    return of(hobbies);
  }
}
