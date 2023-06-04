import "./App.css";
import React, {useState} from "react";

import InputForm from "./components/Form/InputForm";
import Header from "./components/Header/Header";
import ProductShow from "./components/ProductShow/ProductShow";
import CartProvider from "./components/Store/CartProvider";


function App() {
 
  const [CollectionOfData, setCollectionOfData] = useState([]);

  const InputData= (SingleData) =>{
    setCollectionOfData([...CollectionOfData,SingleData]);
    
  };


  return (
    <CartProvider className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="InputForm">
        <InputForm InputData={InputData}/>
      </div>
      <div className="ProductShow">
        <ProductShow CollectionOfData={CollectionOfData}/>
      </div>
    </CartProvider>
  );
}

export default App;
