import React from 'react'
import '../styles/product.css'
import axios from 'axios';

const Product = ({ data }) => {
    console.log(data);

    const checkouthandler = async (amount) => {

       const {data: keyData} = await axios.get("/api/v1/getKey")
       const {key_id} = keyData
       console.log(key_id);
       
        const { data: orderData } = await axios.post("/api/v1/payment/process", {
            amount
        })
        const { order } = orderData;
        console.log(order);
        
        const options = {
        key: key_id, // Replace with your Razorpay key_id
        amount: amount, // Amount is in currency subunits.
        currency: 'INR',
        name: 'Acme Corp',
        description: 'Test Transaction',
        order_id: order.id, // This is the order_id created in the backend
        callback_url: 'http://localhost:8000/api/v1/paymentVerification', // Your success URL
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    }
    return (
        <div className='product-container'>
            {data.map((item) => (
                <div className='product-card' key={item.id}>
                    <img src={item.image} alt='product' className='product-image' />
                    <h3 className='product-title'>{item.title}</h3>
                    <p className='product-price'>Price<strong>{item.price}</strong></p>
                    <button className='pay-button' onClick={() => checkouthandler(item.price)}>Pay {item.price}</button>
                </div>
            ))}
        </div>
    )
}

export default Product;
