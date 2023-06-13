import Select from "./select";
import { useState } from "react";
import { ISelectTypeOption } from "./select/types";

const OPTIONS_1: ISelectTypeOption[] = [
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Green", value: "green" },
  { label: "Gray", value: "gray" },
  { label: "Blue", value: "Blue" },
];

const OPTIONS_2: ISelectTypeOption[] = [
  { label: "Ford", value: "ford" },
  { label: "Ferrari", value: "ferrari" },
  { label: "Kia", value: "kia" },
  { label: "Mercedes", value: "mercedes" },
  { label: "Audi", value: "audi" },
];

function App() {
  const [value1, setValue1] = useState<ISelectTypeOption>(OPTIONS_1[0]);
  const [value2, setValue2] = useState<ISelectTypeOption>(OPTIONS_2[1]);

  return (
    <section className="layout">
      <div className="row">
        <h5 className="title"> Default styles </h5>

        <Select
          onChange={(option) => setValue1(option)}
          options={OPTIONS_1}
          value={value1}
        />
      </div>

      <div className="row">
        <h5 className="title"> Customised </h5>

        <Select
          onChange={(option) => setValue2(option)}
          options={OPTIONS_2}
          value={value2}
          CNSelect="select"
          CNSelectOpen="selectOpen"
          CNList="optionsList"
          CNOption="optionsElement"
          CNSelectedOption="optionsElementSelected"
          CNIcon="optionsElementIcon"
          CNHoveredOption="optionsElementHovered"
        />
      </div>
    </section>
  );
}

export default App;
