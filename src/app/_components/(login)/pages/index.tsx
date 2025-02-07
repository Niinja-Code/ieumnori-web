"use client";

import { FormEvent, useState } from "react";
import Button from "../../common/button";
import { z } from "zod";

const schema = z.string().min(4, "4글자 이상 입력해주세요.");

const LoginPage = () => {
  const [error, setError] = useState("");
  console.log("업뎃");
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const adminCode = formData.get("adminCode") as string;
    const rememberCode = !!formData.get("rememberCode");

    const handleValidation = (adminCode: string) => {
      try {
        schema.parse(adminCode);
        return true;
      } catch (err) {
        if (err instanceof z.ZodError) {
          setError(err.errors[0].message);
        }
      }
    };

    // validation
    if (!!handleValidation(adminCode)) {
      return;
    }

    try {
      // api 호출

      if (rememberCode) {
        localStorage.setItem("rememberCode", adminCode);
      } else {
        localStorage.removeItem("rememberCode");
      }
    } catch (err) {
      // error
    }

    console.log("adminCode", adminCode);
    console.log("rememberCode", rememberCode);
  };
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="adminCode">관리자 코드</label>
        <input
          id="adminCode"
          name="adminCode"
          type="text"
          onChange={() => error && setError("")}
        />
      </div>
      <div>
        <input
          id="rememberCode"
          name="rememberCode"
          type="checkbox"
          defaultChecked={
            typeof localStorage !== "undefined" &&
            !!localStorage?.getItem("rememberCode")
          }
        />
        <label htmlFor="rememberCode">로그인 정보를 기억합니다.</label>
      </div>
      <Button submit name="로그인" />
    </form>
  );
};

export default LoginPage;
