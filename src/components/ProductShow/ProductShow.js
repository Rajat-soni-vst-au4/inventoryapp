import React from 'react';
import "./ProductShow.css"
import Button from '../Button/Button'

const ProductShow = ({FinalData}) => {
    const Dummy = [
        {
            productDes: "Dairy-Milk",
            productName: "choclate",
            productPrice: 40,
        },
        {
            productDes: "FruitnNut",
            productName: "choclate",
            productPrice: 60,
        },
        {
            productDes: "Cranberry",
            productName: "juice",
            productPrice: 110,
        },
        ...FinalData
    ]
    const Showlist = Dummy.map((item) => <li className='list'>{item.productName} {item.productDes} {item.productPrice}  <Button /></li>)
  return (
    <div>
        <ul>
            {Showlist}
           
        </ul>
    </div>
  )
}

export default ProductShow