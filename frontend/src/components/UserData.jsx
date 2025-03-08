import React, { useState } from 'react'
import { LOGO_URL } from '../constants/utils'
import Button from './Button'

const UserData = ({name,email}) => {
    const [show,setShow] = useState(false);
  return (
    <div className='relative'>
        <div className='flex gap-2 items-center cursor-pointer' onClick={()=>setShow(!show)}>
            <img src={LOGO_URL} alt="" />
        </div>
       { show && <div className='absolute flex flex-col gap-2 items-center bg-white rounded-lg shadow-lg -bottom-[150px] right-[-10px] p-4'>
            <h1>{name}</h1>
            <p>{email}</p>  
            <Button type={"pink"} title={"Log Out"}></Button>
        </div>}
    </div>
  )
}

export default UserData