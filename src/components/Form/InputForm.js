import React, {useState, useEffect} from 'react';
import ProductShow from '../ProductShow/ProductShow';

import NewProductForm from './NewProductForm';



const InputForm = () => {
   
    const [dataList, setDataList] = useState([]);

    // console.log("data", dataList)

    useEffect(() => {
      localStorage.setItem("Data",JSON.stringify(dataList))

    }, [dataList])

const data = (enterProductDes,enterProductName,enterProductPrice) =>{
    let SingleData = {
        productDes: enterProductDes,
        productName: enterProductName,
        productPrice: enterProductPrice,
    }

    setDataList(prev => [...prev, SingleData]);

}
  return (
    <div>
        <NewProductForm getData= {data}/>
        <ProductShow FinalData = {dataList}/>
    </div>
  )
}

export default InputForm