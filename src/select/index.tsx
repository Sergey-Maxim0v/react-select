import { FC, useEffect, useRef, useState } from "react";
import { ISelect } from "./types";
import styles from "./styles.module.css";

const Select: FC<ISelect> = ({
  value,
  onChange,
  options,
  CNSelect,
  CNList,
  CNOption,
  CNSelectedOption,
  CNHoveredOption,
  CNIcon,
  CNSelectOpen,
}) => {
  const selectedOption = options.find(
    (option) => option.value === value?.value
  );
  const indexSelected = selectedOption ? options.indexOf(selectedOption) : 0;

  const [isOpen, setIsOpen] = useState(false);
  const [indexHovered, setIndexHovered] = useState<number>(indexSelected);

  // eslint-disable-next-line
  // @ts-ignore
  const containerRef = useRef<HTMLDivElement>(null); // Argument type null is not assignable to parameter type HTMLDivElement

  const incrementIndexState = () => {
    setIndexHovered((prev) => {
      if (prev === options.length - 1) {
        return prev;
      }
      return ++prev;
    });
  };

  const subtractIndexState = () => {
    setIndexHovered((prev) => {
      if (prev === 0) {
        return 0;
      }
      return --prev;
    });
  };

  useEffect(() => {
    const current = containerRef.current;

    const handler = (event: KeyboardEvent) => {
      if (event.target !== containerRef.current) {
        return;
      }

      if (isOpen) {
        event.stopPropagation();
      }

      switch (event.code) {
        case "Space":
          setIsOpen((prev) => !prev);
          break;

        case "Escape":
          if (isOpen) {
            setIsOpen(false);
            setIndexHovered(indexSelected);
          }
          break;

        case "Enter":
          if (!isOpen) {
            setIsOpen(true);
          } else {
            onChange(options[indexHovered]);
            setIsOpen(false);
          }
          break;

        case "ArrowDown":
          if (!isOpen) {
            setIsOpen(true);
          } else {
            incrementIndexState();
          }
          break;

        case "ArrowUp":
          if (isOpen) {
            subtractIndexState();
          }
          break;
      }
    };

    current?.addEventListener("keydown", handler);

    return () => {
      current?.removeEventListener("keydown", handler);
    };

    // eslint-disable-next-line
  }, [isOpen, options, incrementIndexState]);

  return (
    <div
      ref={containerRef}
      className={`${styles.selectContainer} ${isOpen ? styles.open : ""} ${
        isOpen ? CNSelectOpen : ""
      } ${CNSelect ?? ""}`}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0} // for onBlur
      onBlur={() => setIsOpen(false)}
    >
      <span className={styles.selectText}>
        {value ? value.label : "Выберете"}
      </span>

      <svg
        className={`${styles.selectIcon} ${CNIcon ?? ""}`}
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.495029 0.690001C0.250029 0.935001 0.250029 1.33 0.495029 1.575L4.65003 5.73C4.84503 5.925 5.16003 5.925 5.35503 5.73L9.51003 1.575C9.75503 1.33 9.75503 0.935001 9.51003 0.690001C9.26503 0.445001 8.87003 0.445001 8.62503 0.690001L5.00003 4.31L1.37503 0.685002C1.13503 0.445002 0.735029 0.445001 0.495029 0.690001Z"
          fill="currentColor"
        />
      </svg>

      <ul className={`${styles.selectList} ${CNList ?? ""}`}>
        {options.map((option, index) => (
          <li
            key={option.value}
            className={`${styles.selectOption} ${CNOption ?? ""} ${
              options.indexOf(option) === indexSelected ? CNSelectedOption : ""
            } ${
              options.indexOf(option) === indexSelected ? styles.selected : ""
            } ${
              options.indexOf(option) === indexHovered ? styles.hovered : ""
            } ${
              CNHoveredOption && options.indexOf(option) === indexHovered
                ? CNHoveredOption
                : ""
            }`}
            onClick={() => onChange(option)}
            onMouseOver={() => setIndexHovered(index)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
