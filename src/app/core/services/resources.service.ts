import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OptionModel } from '../models/option.model';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  
  getDocuments(): Observable<OptionModel[]> {
    const documents = [
      { id: 'cc', label: 'Cédula de ciudadanía' },
      { id: 'ce', label: 'Cédula de extrangería' },
      { id: 'ti', label: 'Tarjeta de identidad' },
    ];

    return of(documents);
  }

  getEthnicGroups(): Observable<OptionModel[]> {
    const ethnicGroups = [
      { id: 'indigena', label: 'Indígena' },
      { id: 'afroNegroRaizalPalenquero', label: 'Afro, Negro Raizal o Palenquero' },
      { id: 'rrom', label: 'Rrom' },
      { id: 'campesina', label: 'Campesina' },
      { id: 'victimaConflicto', label: 'Víctima del conflicto armado' },
      { id: 'lgbti', label: 'LGBTI' },
      { id: 'discapacitado', label: 'Persona en condición de discapacidad' },
      { id: 'n/a', label: 'Ninguna de las anteriores' },
    ];

    return of(ethnicGroups);
  }

  getMaritalStatus(): Observable<OptionModel[]> {
    const maritalStatus = [
      { id: 'soltera', label: 'Soltera' },
      { id: 'casada', label: 'Casada' },
      { id: 'unionLibre', label: 'Unión libre' },
      { id: 'divorciada', label: 'Divorciada' },
      { id: 'viuda', label: 'Viuda' },
      { id: 'otro', label: 'Otro' },
    ];

    return of(maritalStatus);
  }

  getSustenting(): Observable<OptionModel[]> {
    const sustenting = [
      { id: 'hijos', label: 'Mis hijos' },
      { id: 'esposo', label: 'Mi esposo' },
      { id: 'padres', label: 'Mis padres' },
      { id: 'abuelos', label: 'Mis abuelos' },
      { id: 'nietos', label: 'Mis mietos' },
    ];

    return of(sustenting);
  }

  getFamilyCore(): Observable<OptionModel[]> {
    const arr = Array(21).fill(null).map((_, index)=> ({ id: `${index}`, label: `${index}` }));
    arr.push({ id: 'otro', label: 'Otro' });
    arr.shift();
  
    return of(arr);
  }

  getFamilyIncome(): Observable<OptionModel[]> {
    const familyIncomes = [
      { id: 'menosque1', label: 'Menor a 1 SMLV' },
      { id: 'entre1y2', label: 'Entre 1 y 2 SMLV' },
      { id: 'masque2', label: 'Mas Superior a 2 SMLV' },
    ];
  
    return of(familyIncomes);
  }

  getHousingType(): Observable<OptionModel[]> {
    const housingType = [
      { id: 'propia', label: 'Propia' },
      { id: 'arrendada', label: 'Arrendada' },
      { id: 'familiar', label: 'Familiar' },
    ];
  
    return of(housingType);
  }

  getEducation(): Observable<OptionModel[]> {
    const education = [
      { id: 'primaria', label: 'Culminé la primaria' },
      { id: 'bachiller', label: 'Soy bachiller' },
      { id: 'tecnica/tecnologa', label: 'Soy técnica/tecnóloga' },
      { id: 'profesional', label: 'Soy profesional universitaria' },
      { id: 'especialización', label: 'Tengo una especialización' },
    ];
  
    return of(education);
  }

  getStratum(): Observable<OptionModel[]> {
    const arr = Array(7).fill(null).map((_, index)=> ({ id: `${index}`, label: `${index}` }));
    arr.shift();
  
    return of(arr);
  }

  getTemplates(): Observable<OptionModel[]> {
    const templates = [
      { label: 'Registro', id: 'register' },
      { label: 'Notificación', id: 'notification' },
    ];

    return of(templates);
  }
}
