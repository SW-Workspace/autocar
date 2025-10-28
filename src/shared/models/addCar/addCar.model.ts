export interface addCarsFormModel {
  formData?: any;
  setFormData?: (field: string, value: any) => void;
  errors?: Record<string, string>;
}