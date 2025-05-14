"use client";

import { Controller, useForm } from "react-hook-form";
import S from "./styles.module.scss";
import { CheckBoxIcon } from "@icons/index";

interface ContactFormType {
  content: string;
  forReturnType: "EMAIL" | "MMS";
  forReturn: string;
  agree: boolean;
}

const Contact = () => {
  const { handleSubmit, watch, control } = useForm<ContactFormType>({
    mode: "onChange",
    defaultValues: {
      content: "",
      forReturnType: "EMAIL",
      forReturn: "",
      agree: false,
    },
    shouldFocusError: true,
  });

  const onSubmit = (data: ContactFormType) => {
    console.log("---data::", data);
  };

  return (
    <div className={S.pageContainer}>
      <h2 className={S.pageTitle}>문의하기</h2>
      <form className={S.formWrap} onSubmit={handleSubmit(onSubmit)}>
        <div className={S.section}>
          <h3>문의내용 *</h3>
          <Controller
            name="content"
            control={control}
            rules={{
              validate: (value) => {
                if (!value) return false;
                return true;
              },
            }}
            render={({ field, fieldState }) => (
              <textarea
                {...field}
                className={`${S.contentInput} ${
                  fieldState.error ? S.error : ""
                }`}
                placeholder="문의 내용을 입력해 주세요."
              />
            )}
          />
        </div>
        <div className={S.section}>
          <h3>
            메일 내용에 대한 답변을 이메일 혹은 문자메시지로 받을 수 있습니다.
          </h3>
          <div className={S.radioWrap}>
            <Controller
              name="forReturnType"
              control={control}
              render={({ field }) => {
                return (
                  <>
                    <label className={S.radioInput} htmlFor="RETURN_EMAIL">
                      <input
                        type="radio"
                        id="RETURN_EMAIL"
                        value="EMAIL"
                        checked={field.value === "EMAIL"}
                        onChange={field.onChange}
                      />
                      이메일
                    </label>
                    <label className={S.radioInput} htmlFor="RETURN_MMS">
                      <input
                        type="radio"
                        id="RETURN_MMS"
                        value="MMS"
                        checked={field.value === "MMS"}
                        onChange={field.onChange}
                      />
                      문자메시지
                    </label>
                  </>
                );
              }}
            />
          </div>
        </div>
        <div className={S.section}>
          <Controller
            name="forReturn"
            control={control}
            render={({ field, fieldState, formState }) => {
              const type = watch("forReturnType");
              return (
                <>
                  <h3>{type === "EMAIL" ? "메일 주소" : "핸드폰 번호"}</h3>
                  <input
                    {...field}
                    className={`${S.textInput} ${
                      fieldState.error ? S.error : ""
                    }`}
                    placeholder="텍스트를 입력해 주세요."
                  />
                </>
              );
            }}
          />
        </div>
        <div className={S.section}>
          <Controller
            name="agree"
            control={control}
            rules={{
              validate: (value) => {
                if (!value) return false;
                return true;
              },
            }}
            render={({ field, fieldState }) => (
              <label
                className={`${S.agreeInput} ${fieldState.error ? S.error : ""}`}
              >
                <input
                  type="checkbox"
                  value="MMS"
                  checked={field.value}
                  onChange={field.onChange}
                />
                <CheckBoxIcon
                  className={`${S.checkboxIcon} ${
                    field.value ? S.checked : ""
                  }`}
                />
                작성한 내용에 대한 개인정보 활용에 동의합니다.
              </label>
            )}
          />
          <ul className={S.agreeList}>
            <li>
              개인정보 동의 활용을 거부할 수 있으나, 문의 접수가 불가능합니다.
            </li>
            <li>
              개인정보 보관 기간 : 문의 내용에 대한 답변 완료 시점까지 개인정보
            </li>
            <li>활용 : 이메일주소,휴대폰 번호</li>
          </ul>
        </div>
        <button className={S.submit} type="submit">
          문의하기
        </button>
      </form>
    </div>
  );
};

export default Contact;
