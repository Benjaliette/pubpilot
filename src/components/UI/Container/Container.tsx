import { ReactElement } from "react";

import classes from "./Container.module.scss";

interface MyContainerProps {
  children: ReactElement;
}

const Container = ({children} : MyContainerProps) => {
  return (
    <div className={classes.container}>{ children }</div>
  );
}

export default Container;
