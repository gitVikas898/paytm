import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import Popup from "./Popup";
import { FaCircleCheck } from "react-icons/fa6";
const Payment = ({ token, to , isOpen , setIsPopupOpen,setActivePopupUser}) => {
 
  console.log;
  const [amount, setAmount] = useState(0);
  const handlePay = async () => {
    const response = await axios.post(
      "https://paytm-production-d799.up.railway.app/api/v1/account/transfer",
      { amount, to },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
       
        <div className="flex flex-col gap-2">
          <input
            className="p-2 w-full outline-none border border-gray-400 rounded-md"
            onChange={(e) => setAmount(parseInt(e.target.value))}
            type="number"
            placeholder="Enter Amount"
          ></input>
          <Button
            title={"Send"}
            onClick={() => {
              handlePay();
              setIsPopupOpen(!isOpen)
             setTimeout(()=>{
              setIsPopupOpen(isOpen)
              setActivePopupUser(null)
             },3000)
            }}
            type={"gradient"}
          />
        </div>
      </div>
      <Popup isOpen={isOpen}>
          <div className="flex flex-col gap-2 items-center justify-center">
              <div className="flex items-center justify-center">
                <FaCircleCheck size={30} fill="green"/>
              </div>
              
              <h1>Payment Successfull</h1>
          </div>
      </Popup>
    </>
  );
};

export default Payment;
