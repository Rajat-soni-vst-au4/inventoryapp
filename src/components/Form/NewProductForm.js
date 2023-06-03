import React,{useState} from 'react';

function NewProductForm( {getData}) {
    const [enterProductDes, setEnterProductDes] = useState("")
    const [enterProductName, setEnterProductName] = useState("")
    const [enterProductPrice, setEnterProductPrice] = useState("")

    const CollectInputData =(e) =>{
        e.preventDefault()
        getData(enterProductDes,enterProductName,enterProductPrice)
        setEnterProductDes("")
        setEnterProductName("")
        setEnterProductPrice("")

    }
  return (
    <div className='forms'>
        <form onSubmit={CollectInputData}>
 
            <label className='label'>Product Name</label>
            <input type="text" value={enterProductName} onChange={(e) => setEnterProductName(e.target.value)}/>
            <label className='label'>Product Description</label>
            <input type="text" value={enterProductDes} onChange={(e) => setEnterProductDes(e.target.value)}/>
            <label className='label'>Product Price</label>
            <input type="number" value={enterProductPrice} onChange={(e) => setEnterProductPrice(e.target.value)}/>
          
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default NewProductForm