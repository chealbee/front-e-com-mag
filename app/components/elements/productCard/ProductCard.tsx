import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import img from "@/public/images/6fae6e2815e0ea6fe4e071f6f0bab7f1 1.png";
import OriginButton from "../../ui/buttons/origin/OriginButton";
import { IProduct } from "@/app/types/product";

const ProductCard = ({ data }: { data: IProduct }) => {
  return (
    <div className={style.card}>
      <div className={style.img}>
        <Image fill src={"http://localhost:5000/" + data.img} alt="" />
      </div>
      <h4 className={style.heading}>{data.name}</h4>
      <p className={style.descriptiion}>
        {data.description.length > 150
          ? `${data.description.slice(0, 150)}...`
          : data.description}
      </p>
      <div className={style.orderSection}>
        <p className={style.price}>{data.price}$</p>
        <OriginButton>add to cart</OriginButton>
      </div>
    </div>
  );
};

export default ProductCard;
