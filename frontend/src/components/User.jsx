import React from 'react'
import { LOGO_URL } from '../constants/utils'
import Button from './Button'

const User = ({field1 , isPopupOpen ,setIsPopupOpen}) => {
  return (
    <div className='flex justify-between gap-2 items-center font-firesans'>
        <div className='flex gap-2 items-center'>
            <div className='w-12 h-12 rounded-full flex'>
                <img src={LOGO_URL} alt="USER" />
            </div>
            <div>
                <h1 className='text-2xl'>{field1}</h1>
            </div>
        </div>
        <div className='w-[100px]' onClick={()=>setIsPopupOpen(!isPopupOpen)}>
            <Button type={"gradient"} title={"Send"} />
        </div>
    </div>
  )
}

export default User