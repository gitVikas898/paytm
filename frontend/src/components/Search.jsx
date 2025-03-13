import React from 'react'
import Button from './Button'

const Search = ({searchQuery,setSearchQuery}) => {
  return (
    <div className='flex container mx-auto mt-4 p-4 max-w-[800px]'>
        <input placeholder='Find Users' className='rounded-md w-full px-4 py-4 rounde-md font-inter outline-none' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}></input>
        <button className=" w-28 py-2 text-white text-lg font-semibold  bg-gradient-to-r from-blue-500 to-cyan-200 hover:opacity-90 active:scale-95 transition duration-300">Search</button>
    </div>
  )
}

export default Search