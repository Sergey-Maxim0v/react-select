export interface ISelect {
  onChange: (val: ISelectTypeOption) => void;
  options: ISelectTypeOption[];
  value: ISelectTypeOption | undefined;
  classNameSelect?: string;
}

export interface ISelectTypeOption {
  label: string;
  value: string;
}
