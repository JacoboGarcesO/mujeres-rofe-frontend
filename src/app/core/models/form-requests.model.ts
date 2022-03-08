export interface FormRequestModel {
  id: string;
  title: string;
  subject: string;
  fields: FormRequestFieldsModel[];
  plantilla?: string;
}

export interface FormRequestFieldsModel {
  label: string;
  placeholder: string;
  value: string;
}
