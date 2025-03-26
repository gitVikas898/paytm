import React, { useState } from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Popup from '../components/Popup'
import Progress from '../components/Progress'

const Signup = () => {
  
  const[firstName,setFirstName] = useState("");
  const[secondName,setSecondName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[showPopup,setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try{
      const response = await axios.post("https://paytm-production-d799.up.railway.app/api/v1/user/signup",{
        firstName:firstName,
        lastName:secondName,
        username:email,
        password
      });
      console.log(response.data);
      
      setShowPopup(true);
      
      setInterval(()=>{
        setShowPopup(false);
        navigate("/signin")
      },3000)
      
    }catch(error){
      console.log("Error",error);
    }
  }


  return (
    <div className='grid min-h-screen place-items-center'>
      <div className='p-8 grid gap-4 shadow-lg rounded-md w-[400px] bg-white'>
          <div className='flex flex-col gap-2 items-center justify-between'>
              <Heading label={"Sign Up"}/>
              <Subheading text={"Enter your details below"}/>
          </div>
          <div className='grid gap-2'>
              <Input onChange={(e)=>{setFirstName(e.target.value)}}  placeholder={"Enter your first name"} label={"First Name"}/>
              <Input onChange={(e)=>{setSecondName(e.target.value)}} placeholder={"Enter your last name"} label={"Last Name"}/>
              <Input onChange={(e)=>{setEmail(e.target.value)}} placeholder={"Enter your email"} label={"Email"}/>
              <Input onChange={(e)=>{setPassword(e.target.value)}} placeholder={"Enter your password"} label={"Password"}/>
          </div>
          <div className='flex items-center justify-center w-full'>
            <Button onClick={()=>{
                handleSignup();
            }} title={"Sign up"} type={"gradient"}/>
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <Subheading text={"already a user ? "}/><span className='font-xl font-bold underline cursor-pointer'><Link to={"/signin"} className='hover:text-orange-500'>Sign in</Link></span>
          </div>
      </div>
      <Popup isOpen={showPopup}>
            <h1 className='text-2xl font-merriweather mb-2'>Sign up Successfull</h1>
            <p className='font-firesans mb-2'>Redirecting to login page</p>
            <Progress/>
      </Popup>
      
    </div>
  )
}

export default Signup