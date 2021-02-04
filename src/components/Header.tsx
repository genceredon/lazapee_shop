import React, { PropsWithChildren } from "react";
import "../components/Header.css";

const Header: React.FC<PropsWithChildren<{}>> = (props) => {
  return <header>
    {props.children}
    </header>;
};

export default Header;
