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

function App() {
  const [value1, setValue1] = useState<ISelectTypeOption>(OPTIONS_1[0]);

  return (
    <section className="layout">
      <div className="row">
        <Select
          onChange={(option) => setValue1(option)}
          options={OPTIONS_1}
          value={value1}
        />
      </div>

      <div className="row">test</div>
      <div className="row">test</div>
    </section>
  );
}

export default App;
