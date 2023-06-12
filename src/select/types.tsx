export interface ISelect {
  onChange: (val: ISelectTypeOption) => void;
  options: ISelectTypeOption[];
  value: ISelectTypeOption | undefined;
  classNameSelect?: string;
  classNameSelectOpen?: string;
  classNameOptions?: string;
  classNameOption?: string;
  classNameSelectedOption?: string;
  classNameHoveredOption?: string;
  classNameIcon?: string;
}

export interface ISelectTypeOption {
  label: string;
  value: string;
}
