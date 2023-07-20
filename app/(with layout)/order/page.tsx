"use client";
import React from "react";
import Container from "@/app/components/layout/container/Container";

import "./style.scss";
import cart from "@/public/carticon.svg";
import plus from "@/public/plus.png";
import minus from "@/public/minus.png";
import image from "@/public/images/warehouse-indoor-view 2.png";

import Image from "next/image";
import Separator from "@/app/components/ui/separator/Separator";
import OriginButton from "@/app/components/ui/buttons/origin/OriginButton";
import Checkbox from "@/app/components/ui/checkbox/Checkbox";
import { useUser } from "@/app/store/user/store";
import { useRouter } from "next/navigation";

const page = () => {
  const user = useUser((state) => state.user);
  const router = useRouter();

  if (user) {
  } else {
    router.push("/auth/login");
  }
  return (
    <div>
      <Container>
        <div className="orderPage">
          <div className="productsList">
            <div className="productsList__top">
              <h3 className="cartTitle">
                <Image src={cart} alt="cart icon" /> Cart
              </h3>
            </div>
            <div className="productsList__propducts">
              <div className="productsList__product listProduct">
                <div className="listProduct__left">
                  <div className="listProduct__image">
                    <Image src={image} alt="product omage" />
                  </div>
                  <div className="listProduct__title">
                    Кабель к газовому клапану SIT NOVA 820 для Protherm
                  </div>
                </div>

                <div className="listProduct__right">
                  <div className="listProduct__counter  ProductCaunter">
                    <div className="ProductCaunter__buttonminus">
                      <Image src={minus} alt="minus" />
                    </div>
                    <input
                      className="ProductCaunter__input"
                      type="number"
                      placeholder="0"
                    />
                    <div className="ProductCaunter__buttonplus">
                      <Image src={plus} alt="plus" />
                    </div>
                  </div>
                  <div className="listProduct__price">1000 $</div>
                  <div className="listProduct__deleteButton">delete</div>
                </div>
              </div>
              <Separator type="HORIZONTAL" />
            </div>
            <div className="productsList__total">
              <div className="productsList__totalValue">
                <p>Total amount of the order:</p>
                <p className="productsList__totalPrice">1000 $</p>
              </div>
            </div>
          </div>
          <div className="orderProducts">
            <div className="orderProducts__heading">Total</div>
            <Separator type="HORIZONTAL" />
            <p className="orderProducts__products">Products (2)</p>
            <div className="orderProducts__total">
              <p>Total</p>
              <p className="orderProducts__totalprice">23 508 $</p>
            </div>
            <OriginButton
              disabled
              cn="orderProducts__button"
              Buttonstyle="disabled"
            >
              Place an order
            </OriginButton>
            <Checkbox
              name=""
              label="I agree with the terms of use of the site"
              cn="orderProducts__checkbox"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
