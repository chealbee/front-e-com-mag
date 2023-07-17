import React, { FC, HTMLAttributes } from "react";

import style from "./style.module.scss";
import ProductCard from "../productCard/ProductCard";
const list = [1, 2, 3, 4, 4, 5, 5, 6, 66];

interface ICardListProps extends HTMLAttributes<HTMLDivElement> {
  cn?: string;
}
const CardList: FC<ICardListProps> = ({ cn, ...remainProps }) => {
  return (
    <div className={style.list + " " + cn} {...remainProps}>
      {list.map((e, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
};

export default CardList;
