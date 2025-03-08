import React, { useEffect, useState } from 'react'

const Progress = () => {
    const [value,setValue] = useState(0);

    useEffect(()=>{
        const progess = setInterval(()=>{
            setValue((prev)=>Math.min(100,prev+1));
        },20)

        return ()=>clearInterval(progess)
    },[])

  return (
    <div className="border border-gray-200 rounded-lg w-full h-8 overflow-hidden">
        <div className="bg-green-500 h-full transition-all duration-300"
        style={{ width: `${value}%` }} >

        </div>
    </div>
  )
}

export default Progress