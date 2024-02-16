import { ChangeEvent } from "react";
import classes from "./Input.module.scss";

interface MyInputProps {
  type: string;
  id: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, id, label, onChange }: MyInputProps) => {
  return (
    <div className={classes.input__group}>
      <label htmlFor={id} className={classes.form__label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={classes.form__input}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
