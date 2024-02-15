import classes from "./Input.module.scss";

interface MyInputProps {
  type: string;
  name: string;
  label: string;
}

const Input = ({ type, name, label }: MyInputProps) => {
  return (
    <div className={classes.form__group}>
      <label htmlFor={name} className={classes.form__label}>
        { label }
      </label>
      <input type={type} id={name} name={name} className={classes.form__input}/>
    </div>
  );
};

export default Input;
