import React, { ButtonHTMLAttributes, FC } from "react";
import style from "./style.module.scss";
import classNames from "classnames";

export interface IOriginButtomProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  cn?: string;
  Buttonstyle?: "normal" | "yelow" | "complite" | "spaced";
}
const OriginButton: FC<IOriginButtomProps> = ({
  cn,
  Buttonstyle = "normal",
  children,
  ...reaminProps
}) => {
  const isActive = Buttonstyle === "yelow" ? style.active : null;
  const isComplite = Buttonstyle === "complite" ? style.complite : null;
  const isSpaced = Buttonstyle === "spaced" ? style.spaced : null;

  return (
    <button
      className={classNames(style.button, isActive, isComplite, isSpaced, cn)}
      {...reaminProps}
    >
      {children}
    </button>
  );
};

export default OriginButton;
