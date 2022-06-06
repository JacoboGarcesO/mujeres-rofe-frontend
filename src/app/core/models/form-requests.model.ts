import { MediaModel } from './media.model';
import { OptionModel } from './option.model';

export interface FormRequestModel {
  id: string;
  title: string;
  subject: string;
  creationDate: Date;
  channel: string;
  fields: FormRequestFieldsModel[];
  template: string;
  description: string;
}

export interface FormRequestFieldsModel {
  label: string;
  placeholder: string;
  value: string;
  image?: MediaModel;
  type: string;
  options: OptionModel[];
}
