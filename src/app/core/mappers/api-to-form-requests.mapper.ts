import { Injectable } from '@angular/core';
import { FormRequestFieldsModel, FormRequestModel } from '../models/form-requests.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToFormRequestsMapper {
  map(response: any): FormRequestModel[] {
    if (!response?.requests) { return []; }

    return response?.requests?.map(this.getRequest.bind(this));
  }

  private getRequest(request: any): FormRequestModel {
    return {
      id: request?._id,
      title: request?.title,
      subject: request?.subject,
      plantilla: request?.plantilla,
      fields: this.getFields(request?.fields),
    };
  }

  private getFields(fields: any[]): FormRequestFieldsModel[] {
    return fields?.map((field: any) => ({
      label: field?.label ?? null,
      placeholder: field?.placeholder ?? null,
      value: field?.value ?? null,
    }));
  }
}
