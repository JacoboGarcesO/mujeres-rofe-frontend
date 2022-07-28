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
      { id: 'Soltera', label: 'Soltera' },
      { id: 'Casada', label: 'Casada' },
      { id: 'Unión libre', label: 'Unión libre' },
      { id: 'Divorciada', label: 'Divorciada' },
      { id: 'Viuda', label: 'Viuda' },
      { id: 'Otro', label: 'Otro' },
    ];

    return of(maritalStatus);
  }

  getSustenting(): Observable<OptionModel[]> {
    const sustenting = [
      { id: 'hijos', label: 'Mis hijos' },
      { id: 'esposo', label: 'Mi esposo' },
      { id: 'padres', label: 'Mis padres' },
      { id: 'abuelos', label: 'Mis abuelos' },
      { id: 'nietos', label: 'Mis nietos' },
      { id: 'otros', label: 'Otros' },
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
      { id: 'Menor a 1 SMLV', label: 'Menor a 1 SMLV' },
      { id: 'Entre 1 y 2 SMLV', label: 'Entre 1 y 2 SMLV' },
      { id: 'Superior a 2 SMLV', label: 'Superior a 2 SMLV' },
    ];
  
    return of(familyIncomes);
  }

  getHousingType(): Observable<OptionModel[]> {
    const housingType = [
      { id: 'Propia', label: 'Propia' },
      { id: 'Arrendada', label: 'Arrendada' },
      { id: 'Familiar', label: 'Familiar' },
    ];
  
    return of(housingType);
  }

  getEducation(): Observable<OptionModel[]> {
    const education = [
      { id: 'primaria', label: 'Culminé la primaria' },
      { id: 'bachiller', label: 'Soy bachiller' },
      { id: 'tecnica/tecnologa', label: 'Soy técnica/tecnóloga' },
      { id: 'profesional', label: 'Soy profesional universitaria' },
      { id: 'especializacion', label: 'Tengo una especialización' },
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

  getDisclosures(): Observable<OptionModel[]> {
    const options = [
      { label: 'Por un/a amig@', id: 'amig@' },
      { label: 'Redes sociales', id: 'redes-sociales' },
      { label: 'Familias en acción', id: 'familias-en-accion' },
      { label: 'Otro', id: 'otro' },
    ];

    return of(options);
  }
}
