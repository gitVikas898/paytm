import React, { useState } from 'react'
import Button from './Button'
import axios from 'axios'

const Payment = ({balance,token,to}) => {
  console.log
  const [amount,setAmount] = useState(0);
  const handlePay =async()=>{
    const response  = await axios.post("http://localhost:3000/api/v1/account/transfer",
      {amount,to},
      {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });

    console.log(response.data);
  }
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <h1 className='text-2xl font-merriweather font-semibold  text-blue-950'>Your Balance is : {balance}</h1>
        </div>
        <div className='flex flex-col gap-2'>
            <input className='p-2 w-full outline-none border border-gray-400 rounded-md' onChange={(e)=>setAmount(parseInt(e.target.value))} type='number' placeholder='Enter Amount'></input>
            <Button title={"Send"} onClick={()=>{handlePay()}} type={"gradient"}/>
        </div>
    </div>
  )
}

export default Payment