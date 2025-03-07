import React from 'react'

const GradientHeading = ({label}) => {
  return (
    
        <h1 className=" md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-200 text-transparent bg-clip-text p-2 sm:text-3xl">{label}</h1>
  )
}

export default GradientHeading