import CartContext from "./CartContext";

import React, {useState}  from "react";

const CartProvider = (props) => {
  const [buttonOne, setButtonOne] = useState(0);
  const [buttonTwo, setButtonTwo] = useState(0);
  const [buttonThree, setButtonThree] = useState(0);

  const [DataId, setDataId] = useState([])

  console.log("dataId", DataId)
  const addOneItem = (e,dataId) => {
    setButtonOne(1);
    setDataId(prev => [...prev,dataId])
  }
  const addTwoItem = (e,dataId) => {
    setButtonTwo(2);
    setDataId(prev => [...prev,dataId]);
    setDataId(prev => [...prev,dataId]);
  }
  const addThreeItem = (e,dataId) => {
    setButtonThree(3);

    setDataId(prev => [...prev,dataId]);
    setDataId(prev => [...prev,dataId]);
    setDataId(prev => [...prev,dataId]);
  };

  const cart =  {
    items: DataId,
    totalAmount:buttonOne+buttonTwo+buttonThree,
    addOneItem: addOneItem,
    addTwoItem: addTwoItem,
    addThreeItem: addThreeItem
  };

  return (
   
    <CartContext.Provider value={cart} >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
