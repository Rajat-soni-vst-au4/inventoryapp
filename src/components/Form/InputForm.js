import React from 'react';

import NewProductForm from './NewProductForm';


const InputForm = ({InputData}) => {

    let countId = 0;

const data = (enterProductDes,enterProductName,enterProductPrice) =>{

    let SingleData = {
        id: countId+1,
        productDes: enterProductDes,
        productName: enterProductName,
        productPrice: enterProductPrice,
    }
    
    InputData(SingleData);
    countId++;
}
   
  return (
    <div>
        <NewProductForm getData={data}/>
    </div>
  )
}

export default InputForm