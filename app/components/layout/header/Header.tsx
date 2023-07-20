"use client";

import style from "./style.module.scss";
import Image from "next/image";

import logo from "@/public/logo.svg";
import cart from "@/public/cart.png";
import Container from "../container/Container";
import Input from "../../ui/input/Input";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { to: "main", label: "Main" },
  { to: "contacts", label: "Contacts" },
  { to: "delivery", label: "Delivery" },
  { to: "catalog", label: "Catalog" },
  { to: "aboutCompany", label: "About" },
];

const Header = () => {
  const router = usePathname();
  console.log(router);

  return (
    <>
      <header className={style.header}>
        <div className={style.top}>
          <Container>
            <ul>
              {links.map((el) => {
                return (
                  <li>
                    <Link
                      style={router === "/" + el.to ? { color: "#ffcf62" } : {}}
                      href={el.to}
                    >
                      {el.label}
                    </Link>
                  </li>
                );
              })}
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
                <link href="order"></link>
                <Link href={"/order"}>
                  <Image src={cart} alt="cart" />
                  <p>cart</p>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
