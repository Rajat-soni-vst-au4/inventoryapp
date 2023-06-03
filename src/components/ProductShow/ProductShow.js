import React from 'react';
import "./ProductShow.css"
import Button from '../Button/Button'

const ProductShow = ({FinalData}) => {
    const Showlist = FinalData.map((item) => <li className='list'>{item.productName} {item.productDes} {item.productPrice}  <Button /></li>)
  return (
    <div>
        <ul>
            {Showlist}
           
        </ul>
    </div>
  )
}

export default ProductShow