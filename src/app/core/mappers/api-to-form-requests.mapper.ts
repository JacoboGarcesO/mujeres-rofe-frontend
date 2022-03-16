import { Injectable } from '@angular/core';
import { FormRequestFieldsModel, FormRequestModel } from '../models/form-requests.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToFormRequestsMapper {
  map(response: any, entity: string): FormRequestModel[] {
    if (!response?.[entity]) { return []; }

    return response?.[entity]?.map(this.getRequest.bind(this));
  }

  getRequest(request: any): FormRequestModel {
    return {
      id: request?._id,
      title: request?.title,
      subject: request?.subject,
      template: request?.template,
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
