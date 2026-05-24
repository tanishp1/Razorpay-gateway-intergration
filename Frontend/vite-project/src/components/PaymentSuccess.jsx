import React from 'react'
import '../styles/paymentSuccess.css'
import { useLocation } from 'react-router-dom'

const PaymentSuccess = () => {
const location = useLocation();
const query = new URLSearchParams(location.search);
    const reference = query.get("reference");

  return (
    <div className='success-container'>
      <div className='success-card'>
        <h1 className='success-title'>Payment Successful</h1>
        <p className='success-message '>Successful ! Thank for your payment</p>
        {
            reference && <p className='success-reference'><strong>Reference Id: {reference}</strong></p>
        }
      </div>
    </div>
  )
}

export default PaymentSuccess
