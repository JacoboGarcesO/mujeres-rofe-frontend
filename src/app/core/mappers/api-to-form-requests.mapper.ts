import { Injectable } from '@angular/core';
import { FormRequestFieldsModel, FormRequestModel } from '../models/form-requests.model';
import { ApiToOptionMapper } from './api-to-option.mapper';

@Injectable({
  providedIn: 'root',
})
export class ApiToFormRequestsMapper {

  constructor(private apiToOptionMapper: ApiToOptionMapper) { }

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
      creationDate: request?.creationDate,
      channel: request?.channel,
      description: request?.description,
      fields: this.getFields(request?.fields),
    };
  }

  private getFields(fields: any[]): FormRequestFieldsModel[] {
    return fields?.map((field: any) => ({
      label: field?.label ?? null,
      placeholder: field?.placeholder ?? null,
      value: field?.value ?? null,
      type: field?.type,
      image: field?.image,
      options: this.apiToOptionMapper.map(field?.options ?? [], '_id', 'label'),
    }));
  }

}
