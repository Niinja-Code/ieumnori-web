import { forwardRef } from "react";
import S from "./styles.module.scss";

interface CustomCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
const CheckBox = forwardRef<HTMLInputElement, CustomCheckboxProps>(
  ({ checked, onChange, ...rest }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    };
    return (
      <>
        <input
          className={S.hidenCheck}
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={handleChange}
          {...rest}
        />
        <span className={`${S.viewCheck} ${checked ? S.checked : ""}`} />
      </>
    );
  }
);

CheckBox.displayName = "CustomCheckbox";

export default CheckBox;
