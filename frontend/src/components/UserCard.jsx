import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { useSelector } from "react-redux";
import axios from "axios";
import Popup from './Popup';

const UserCard = ({ name, email, isOpen, setIsPopupOpen }) => {
  const user = useSelector((store) => store?.user?.user);
  const token = useSelector((store) => store?.user?.token);
  const [balance, setBalance] = useState(null);

  const getBalance = async () => {
    if (!user?.id || !token) return; // Prevent API call if user/token is missing
    console.log("User ID:", user?.id);
    setIsPopupOpen(!isOpen);
    try {
      const response = await axios.get(
        "https://paytm-production-d799.up.railway.app/api/v1/account/balance",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            userId: user?.id,
          },
        }
      );
      console.log("Fetched Balance:", response.data?.balance);
      setBalance(response.data?.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <Card className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 rounded-md">
        <div className="grid gap-2 text-gray-700">
          <h1 className="font-merriweather text-lg font-semibold">{name}</h1>
          <h1 className="font-merriweather text-sm text-gray-500">{email}</h1>
        </div>
        <div className="w-full md:w-[200px] mt-4 md:mt-0">
          <Button type="green" title="Fetch Balance" onClick={getBalance} />
        </div>
        <Popup isOpen={isOpen} onClose={() => setIsPopupOpen(!isOpen)}>
          <h1 className="text-2xl font-merriweather font-semibold text-gray-800">Balance: {balance?.toFixed(2)}</h1>
        </Popup>
      </div>
    </Card>
  );
};

export default UserCard;
