import React, {useContext} from 'react';
import CartContext from '../Store/CartContext';
import classes from "./Cart.module.css";

import CartIcon from "./CartIcon";

const Cart = () => {
const ctx = useContext(CartContext);
console.log(ctx.items)
  return (
    <>
        <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{ctx.totalAmount}</span>
      </button>
    </>
  )
}

export default Cart