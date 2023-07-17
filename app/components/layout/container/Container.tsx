import { FC, ReactNode } from "react";
import style from "./style.module.scss";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className={style.container}>{children}</div>
    </>
  );
};

export default Container;
