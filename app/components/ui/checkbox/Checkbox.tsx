import React, { FC, InputHTMLAttributes, useState } from "react";
import "./style.scss";
import classNames from "classnames";

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  cn?: string;
}

const Checkbox: FC<ICheckboxProps> = ({ cn, label, ...ramainProps }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className={classNames("Mycheckbox__wrapper", cn)}>
      <input
        type="checkbox"
        className="Mycheckbox"
        checked={selected}
        onChange={(e) => setSelected(e.target.checked)}
        {...ramainProps}
      />
      <div
        className={classNames("Mycheckbox__button", {
          active: selected,
        })}
      ></div>
      <span className={classNames("Mycheckbox__label", cn)}>{label}</span>
    </div>
  );
};

export default Checkbox;
