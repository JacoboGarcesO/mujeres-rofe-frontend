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
    
    formData.append('requestFormId', form.id);
    formData.append('requestTitle', form.title);
    formData.append('requestTemplate', form.template);
    formData.append('requestSubject', form.subject);
    formData.append('requestChannel', form.channel);
    formData.append('requestFields', fields);

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
