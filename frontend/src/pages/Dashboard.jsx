import React from 'react'
import Search from '../components/Search'
import Card from '../components/Card'
import User from '../components/User'
import { useState } from "react";
import Popup  from "../components/Popup";
import Payment from '../components/Payment';
const Dashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <section>
        <Search/>
        <div className="grid gap-2 p-4">
            <Card>
               <User field1={"Vikas"} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
            </Card>
        </div>
        <Popup isOpen={isPopupOpen} onClose={()=>setIsPopupOpen(!isPopupOpen)}>
            <Payment balance={"100000"}/>
        </Popup>
    </section>
  )
}

export default Dashboard