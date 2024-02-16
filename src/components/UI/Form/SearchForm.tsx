import SearchButton from "../Buttons/SearchButton";
import Input from "./Input/Input";
import classes from "./Form.module.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, fetchContent } from "src/store/store";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchContent());
    console.log(searchText);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  return (
    <form
      className={classes.form__search_form_group}
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input
        type="text"
        id="search"
        label="Search for a publication"
        onChange={(e) => handleChange(e)}
      ></Input>
      <SearchButton />
    </form>
  );
};

export default SearchForm;
