import React from 'react'

const Popup = ({isOpen,onClose,children}) => {
    if(!isOpen){
        return null
    }
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-md text-center">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Popup