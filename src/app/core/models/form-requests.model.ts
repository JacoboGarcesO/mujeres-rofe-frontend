import { OptionModel } from './option.model';

export interface FormRequestModel {
  id: string;
  title: string;
  subject: string;
  fields: FormRequestFieldsModel[];
  template: string;
}

export interface FormRequestFieldsModel {
  label: string;
  placeholder: string;
  value: string;
  options: OptionModel[];
}
