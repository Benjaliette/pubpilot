import SearchIcon from "../Icons/SearchIcon";
import classes from "./Button.module.scss";

const SearchButton = () => {
  return (
    <button className={ `${classes.btn} ${classes.btn__search}` }>
      <SearchIcon />
    </button>
  );
}

export default SearchButton;
