import React from 'react'
import Button from './Button'

const Payment = ({balance}) => {
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <h1 className='text-2xl font-merriweather font-semibold  text-blue-950'>Your Balance is : {balance}</h1>
        </div>
        <div className='flex flex-col gap-2'>
            <input className='p-2 w-full outline-none border border-gray-400 rounded-md' type='number' placeholder='Enter Amount'></input>
            <Button title={"Send"} type={"gradient"}/>
        </div>
    </div>
  )
}

export default Payment