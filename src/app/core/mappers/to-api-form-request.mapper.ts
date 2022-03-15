import { Injectable } from '@angular/core';
import { FormRequestModel } from '../models/form-requests.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiFormRequestsMapper {
  map(form: FormRequestModel): any {
    return {
      title: form.title,
      template: 'apoyoEmocional',
      subject: form.subject,
      fields: form.fields,
      id: form?.id,
    };
  }
}
