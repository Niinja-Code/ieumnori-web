"use client";

import { FormEvent, useEffect, useState } from "react";
import Button from "../../common/button";
import { z } from "zod";
import S from "./styles.module.scss";
import CheckBox from "../../common/checkbox";

const schema = z.string().min(4, "4글자 이상 입력해주세요.");

const LoginPage = () => {
  const [remember, setRemember] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  console.log("업뎃");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const handleValidation = (code: string) => {
      try {
        schema.parse(code);
        return true;
      } catch (err) {
        if (err instanceof z.ZodError) {
          setError(err.errors[0].message);
        }
      }
    };

    // validation
    if (!!handleValidation(code)) return;

    try {
      // api 호출

      if (remember) {
        localStorage.setItem("rememberCode", code);
      } else {
        localStorage.removeItem("rememberCode");
      }
    } catch (err) {
      // error
    }

    console.log("-- result ::", code, remember);
  };

  useEffect(() => {
    const rememberLogin = localStorage.getItem("rememberLogin");
    if (rememberLogin) {
      setCode(rememberLogin);
      setRemember(true);
    }
  }, []);
  return (
    <div className={S.container}>
      <form onSubmit={handleLogin} className={S.form}>
        <div className={S.wrap}>
          <label htmlFor="adminCode">관리자 코드</label>
          <input
            id="adminCode"
            name="adminCode"
            type="text"
            value={code}
            onChange={(e) => {
              error && setError("");
              setCode(e.target.value);
            }}
          />
        </div>

        {/* <input
            id="rememberCode"
            name="rememberCode"
            className={S.checkBox}
            type="checkbox"
            defaultChecked={
              typeof localStorage !== "undefined" &&
              !!localStorage?.getItem("rememberCode")
            }
          /> */}
        <label htmlFor="rememberCode">
          <CheckBox
            id="rememberCode"
            name="rememberCode"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          로그인 정보를 기억합니다.
        </label>
        <Button submit name="로그인" />
      </form>
    </div>
  );
};

export default LoginPage;
