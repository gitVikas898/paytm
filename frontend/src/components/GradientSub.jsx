import React from 'react'

const GradientSub = ({label}) => {
  return (
    <h1 className="mt-3 mb-3 text-xl sm:text-sm md:text-3xl font-semibold bg-gradient-to-r from-gray-600 to-gray-400 text-transparent bg-clip-text leading-snug">{label}</h1>
  )
}

export default GradientSub