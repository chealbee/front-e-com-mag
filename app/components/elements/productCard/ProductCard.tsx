import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import img from "@/public/images/6fae6e2815e0ea6fe4e071f6f0bab7f1 1.png";
import cart from "@/public/cart2.png";
import OriginButton from "../../ui/buttons/origin/OriginButton";

const ProductCard = () => {
  return (
    <div className={style.card}>
      <div className={style.img}>
        <Image src={img} alt="" />
      </div>
      <h4 className={style.heading}>heading</h4>
      <p className={style.descriptiion}>product descrioption</p>
      <p className={style.type}>type/brand</p>
      <div className={style.orderSection}>
        <p className={style.price}>174$</p>
        <OriginButton>add to cart</OriginButton>
      </div>
    </div>
  );
};

export default ProductCard;
