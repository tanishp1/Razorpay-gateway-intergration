import React from 'react';
import Product from './components/Product';
import data from './components/data';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PaymentSuccess from './components/PaymentSuccess';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<Product data={data}/>}/>
        <Route path='/paymentSuccess'element={<PaymentSuccess/>}/>
      </Routes>
    </Router>
  
  )
}

export default App
