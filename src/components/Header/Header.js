import React from 'react';
import classes from "./Header.module.css";

import Cart from "../Cart/Cart"
import HeaderButton from './HeaderButton';

const Header = () => {
  return (
    <div>
       <header className={classes.header}>
        <h1>Inventory App</h1>
        <HeaderButton />
      </header>
        <Cart />
    </div>
  )
}

export default Header