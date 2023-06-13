export interface ISelect {
  onChange: (val: ISelectTypeOption) => void;
  options: ISelectTypeOption[];
  value: ISelectTypeOption | undefined;
  CNSelect?: string;
  CNSelectOpen?: string;
  CNList?: string;
  CNOption?: string;
  CNSelectedOption?: string;
  CNHoveredOption?: string;
  CNIcon?: string;
}

export interface ISelectTypeOption {
  label: string;
  value: string;
}
