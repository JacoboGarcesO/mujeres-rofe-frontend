import { Injectable } from '@angular/core';
import { FormRequestModel } from '../models/form-requests.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiRequestsMapper {
  map(form: FormRequestModel, currentUser: UserModel): any {
    return {
      request: {
        formId: form.id,
        title: form.title,
        template: form.template,
        subject: form.subject,
        fields: form.fields,
      },
      user: {
        email: currentUser.email,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        document: currentUser.documentNumber,
      },
    };
  }
}
