"use client";
import Container from "@/app/components/layout/container/Container";
import OriginButton from "@/app/components/ui/buttons/origin/OriginButton";

import cart from "@/public/cart2.png";
import img from "@/public/images/warehouse-indoor-view 2.png";
import "./style.scss";
import Image from "next/image";

export default function Product() {
  return (
    <div className="Product">
      <Container>
        <div className="Product__heading">car 1998 year toyota</div>
        <div className="Product__content">
          <div className="Product__photos">
            <div className="Product__image">
              <Image src={img} alt="" />
            </div>
          </div>
          <div className="Product__info">
            <p className="Product__price">100 $</p>
            <p className="Product__typebrand">type/brand</p>
            <OriginButton Buttonstyle="yelow" cn="Product__button">
              <Image src={cart} alt="cart" />
              <p>add to cart</p>
            </OriginButton>
            <p className="Product__name">car 1998 year toyota</p>
            <p className="Product__descrioption">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              necessitatibus expedita repellat, delectus alias qui saepe
              voluptatem aliquam at. Molestiae repellendus commodi illo.
              Ducimus, sapiente cupiditate? Adipisci dolorum quidem ratione.
            </p>
            <div className="Product__haractericsticks">
              <div className="Product__haractericstick">
                <p className="Product__haractericstick_heding">engine</p>
                <span className="Product__haractericstick_value">v8</span>
              </div>
              <div className="Product__haractericstick">
                <p className="Product__haractericstick_heding">engine</p>
                <span className="Product__haractericstick_value">v8</span>
              </div>
              <div className="Product__haractericstick">
                <p className="Product__haractericstick_heding">engine</p>
                <span className="Product__haractericstick_value">v8</span>
              </div>
              <div className="Product__haractericstick">
                <p className="Product__haractericstick_heding">engine</p>
                <span className="Product__haractericstick_value">v8</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="youlike"></div>
    </div>
  );
}
