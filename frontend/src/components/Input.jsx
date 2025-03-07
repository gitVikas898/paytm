import React from 'react'

const Input = ({placeholder , label}) => {
  return (
    <>  
        <div className='flex flex-col gap-2'>
            <label htmlFor={`${label}`} className='font-inter font-semibold'>{label}</label>
            <input  name={`${label}`} placeholder={`${placeholder}`} className=' font-inter w-full text-slate-900 py-2 px-2 rounded-lg outline-none border border-gray-300 '></input>
        </div>
    </>
    
  )
}

export default Input