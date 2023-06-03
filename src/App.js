import './App.css';

import InputForm from './components/Form/InputForm';
import Header from './components/Header/Header';
import CartProvider from './components/Store/CartProvider';

function App() {
  return (
    <CartProvider className="App">
    <div className='Header'><Header /></div>
   <div className='InputForm'> <InputForm /></div>
    </CartProvider>
  );
}

export default App;
