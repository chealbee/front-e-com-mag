"use client";
import React, { useEffect, useState } from "react";
import Container from "@/app/components/layout/container/Container";
import Separator from "@/app/components/ui/separator/Separator";
import OutlineButton from "@/app/components/ui/buttons/outline/OutlineButton";
import "../style.scss";
import Input from "@/app/components/ui/input/Input";
import Link from "next/link";
import { useUser } from "@/app/store/user/store";
import axios from "axios";
import { useRouter } from "next/navigation";
const page = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [err, setErr] = useState(false);
  const setUser = useUser((state) => state.setUser);

  const user = useUser((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/main");
    }
  }, [user]);

  const checkLogin = async () => {
    try {
      const res = await axios.post<{
        token: string;
        user: {
          email: string;
          id: number;
        };
      }>("http://localhost:5000/auth/registration", userData);
      console.log(res.status);

      const data = res.data;
      if (res.status) {
        setUser({ token: data.token, ...data.user });
        setErr(false);
      } else {
        setErr(true);
      }
    } catch (error) {
      setErr(true);
    }
  };

  const loginUser = () => {
    if (userData.email.length && userData.password.length) {
      setUserData({ email: "", password: "" });
      checkLogin();
    }
  };

  return (
    <Container>
      <div className="auth__container">
        <div className="auth__content">
          <div className="auth__heading">Registaration on site</div>
          <Separator type="HORIZONTAL" />
          <Input
            styleType="input"
            placeholder="email"
            type="email"
            cn="auth__input"
            value={userData.email}
            onChange={(e) =>
              setUserData((st) => {
                return { email: e.target.value, password: st.password };
              })
            }
          />
          <Input
            styleType="input"
            placeholder="password"
            type="password"
            value={userData.password}
            cn="auth__input"
            onChange={(e) =>
              setUserData((st) => {
                return { password: e.target.value, email: st.email };
              })
            }
          />
          <OutlineButton cn="auth__button" onClick={loginUser}>
            sign in
          </OutlineButton>
          <p className="someErr">{err ? "not corect email or password" : ""}</p>
          <p className="auth__not">
            <Link href={"login"}>you alredy have acount ?</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default page;
