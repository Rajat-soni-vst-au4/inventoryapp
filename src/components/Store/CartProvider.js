import CartContext from "./CartContext";

import React from "react";

const defaultCartStrat={
    items:[],
    totalAmount:0
    };
    
const CartProvider = (props) => {
    
  return (
    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
