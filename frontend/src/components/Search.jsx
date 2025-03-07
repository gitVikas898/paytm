import React from 'react'
import Button from './Button'

const Search = () => {
  return (
    <div className='flex container mx-auto mt-4 p-4 max-w-[800px]'>
        <input placeholder='Find Users' className='rounded-md w-full px-4 py-4 rounde-md font-inter outline-none'></input>
        <Button  title={"Search"} type={"pink"}/>
    </div>
  )
}

export default Search