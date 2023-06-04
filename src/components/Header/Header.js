import React from 'react';
import classes from "./Header.module.css";

import Cart from "../Cart/Cart"

const Header = () => {
  return (
    <div>
       <header className={classes.header}>
        <h1>Inventory App</h1>
        <Cart />
      </header>
       
    </div>
  )
}

export default Header