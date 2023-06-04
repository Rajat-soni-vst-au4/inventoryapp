import React, {useContext} from 'react';
import CartContext from '../Store/CartContext';

const Button = ({dataId}) => {
  const functions = useContext(CartContext);

  return (
    <div className='Button'>
        <button onClick={(e) => functions.addOneItem(e, dataId)} value="1" >Buy 1</button>
       <button  onClick={(e) => functions.addTwoItem(e, dataId)} value="2" >Buy 2</button>
       <button onClick={(e) => functions.addThreeItem(e, dataId)}  value="3">Buy 3</button>
    </div>
  )
}

export default Button;