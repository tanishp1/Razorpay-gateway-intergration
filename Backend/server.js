import app from './app.js';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import cors from 'cors'
import mongoose from 'mongoose';

dotenv.config({ path: "Backend/config/config.env"})

mongoose.connect(process.env.MONGODB).then(()=>{
  console.log("connected successfull")
}).catch((e)=>{
  console.log(e);
})

const paymentSchema =  new mongoose.Schema({
  razorpay_order_id:{
    type:String,
    required:true,
  },
   razorpay_payment_id:{
    type:String,
    required:true,
  },
   razorpay_signature:{
    type:String,
    required:true,
  },
})

const Payment = mongoose.model("Payment", paymentSchema);

app.use(cors())

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.listen(process.env.PORT,()=> {
    console.log(`server started at PORT ${process.env.PORT}`);
});

