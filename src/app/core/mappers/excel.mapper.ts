import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ExcelMapper {
  map(users: UserModel[]): any {
    return users?.map((user: UserModel) => this.getUser(user));
  }

  private getUser(user: UserModel): any {
    return {
      'Nombres': user?.firstName,
      'Apellidos': user?.lastName,
      'Correo': user?.email,
      'Número de identificación': user?.documentNumber,
      'Celular': user?.phoneNumber,
      'Presentación personal': user?.description,
      'Tipo de documento': user?.documentType,
      'Estado civil': user?.maritalStatus,
      'Dirección': user?.address,
      'Edad': user?.age,
      'Personas del núcleo': user?.familyCore,
      'Ingresos familiares': user?.familyIncome,
      'Tipo de vivienda': user?.housingType,
      'Nivel de estudios': user?.education,
      'Estrato': user?.stratum,
      'Código promocional': user?.promocionalCode,
      '¿Por dónde conociste Mujeres Rofé?': user?.disclosure,
      'Grupo étnico': user?.ethnicGroup.join(','),
      'Sostenimiento': user?.sustaining.join(','),
      'Hobbies': user?.hobbies.join(','),
      'Ciudad': user?.location?.cityName,
      'Fecha de Creación': user.creationDate,
    };
  }
}
