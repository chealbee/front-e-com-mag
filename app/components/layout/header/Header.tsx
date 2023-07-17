import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

import logo from "@/public/logo.svg";
import cart from "@/public/cart.png";
import search from "@/public/search.png";
import { contacts, paymentsMethods, social } from "./data";
import Container from "../container/Container";
import Input from "../../ui/input/Input";

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.top}>
          <Container>
            <ul>
              <li>home</li>
              <li>about company</li>
              <li>contacts</li>
              <li>catalog</li>
            </ul>
          </Container>
        </div>
        <div className={style.bottom}>
          <Container>
            <div className={style.botomContainer}>
              <div className={style.logo}>
                <Image src={logo} alt="logo" />
                <p>online magazine</p>
              </div>
              <Input cn={style.input} styleType="search" />
              <div className={style.cart}>
                <Image src={cart} alt="cart" />
                <p>cart</p>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
