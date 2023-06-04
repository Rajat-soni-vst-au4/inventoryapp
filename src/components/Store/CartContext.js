import React from "react";

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addOneItem: () => {},
    addTwoItem: () => {},
    addThreeItem: () => {}

})

export default CartContext;