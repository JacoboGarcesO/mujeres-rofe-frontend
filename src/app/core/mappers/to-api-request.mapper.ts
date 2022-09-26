import { Injectable } from '@angular/core';
import { FormRequestFieldsModel, FormRequestModel } from '../models/form-requests.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiRequestsMapper {
  map(form: FormRequestModel, currentUser: UserModel): FormData {
    const formData = new FormData();
    const fields = this.getFields(form.fields);
    
    formData.append('formId', form.id);
    formData.append('title', form.title);
    formData.append('template', form.template);
    formData.append('subject', form.subject);
    formData.append('channel', form.channel);
    formData.append('fields', fields);

    formData.append('userEmail', currentUser.email);
    formData.append('userFirstName', currentUser.firstName);
    formData.append('userLastName', currentUser.lastName);
    formData.append('userDocument', currentUser.documentNumber);
    formData.append('image', this.getMedia(form.fields));

    return formData;
  }

  private getMedia(fields: FormRequestFieldsModel[]): File {
    return fields.find((field) => field.type === 'image')?.image?.file;
  }

  private getFields(fields: FormRequestFieldsModel[]): string {
    const fieldsMapped = fields.map((field) => {
      if (field.type === 'list') {
        field.value = field.options.find((option) => option.id === field.value).label;
      }

      return field;
    });

    return JSON.stringify(fieldsMapped);
  }
}
