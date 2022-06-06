import { Injectable } from '@angular/core';
import { FormRequestFieldsModel, FormRequestModel } from '../models/form-requests.model';
import { OptionModel } from '../models/option.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiFormRequestsMapper {
  map(form: FormRequestModel): any {
    return {
      title: form.title,
      description: form?.description,
      template: form.template,
      subject: form.subject,
      fields: this.getFields(form.fields),
      id: form?.id,
      channel: form?.channel,
    };
  }
  private getFields(formFields: FormRequestFieldsModel[]): any[] {
    return formFields.map((field) => ({
      label: field?.label,
      type: field?.type,
      placeholder: field?.placeholder,
      options: this.getOptions(field?.options),
    }));
  }

  private getOptions(options: OptionModel[]): any[] {
    return options?.map((option) => {
      if (option?.id) { return { _id: option.id, label: option.label }; }

      return { label: option.label };
    });
  }
}
