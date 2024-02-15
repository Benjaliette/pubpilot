import Container from "../Container/Container";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Container>
        <>
          <img
            src="/pubpilot-logo.svg"
            alt="Logo image with two white Ps in a black square"
          />
          <ul className={classes.nav__items}>
            <li className={classes.nav__item}>
              <a href="#">Menu</a>
            </li>
            <li className={classes.nav__item}>
              <a href="#">Search</a>
            </li>
            <li className={classes.nav__item}>
              <a href="#">Login</a>
            </li>
          </ul>
        </>
      </Container>
    </nav>
  );
};

export default Navbar;
