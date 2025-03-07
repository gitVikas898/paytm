import React from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Input from '../components/Input'
import Button from '../components/Button'

const Signup = () => {
  return (
    <div className='grid min-h-screen place-items-center'>
      <form className='p-8 grid gap-4 shadow-lg rounded-md w-[400px] bg-white'>
          <div className='flex flex-col gap-2 items-center justify-between'>
              <Heading label={"Sign Up"}/>
              <Subheading text={"Enter your details below"}/>
          </div>
          <div className='grid gap-2'>
              <Input placeholder={"Enter your first name"} label={"First Name"}/>
              <Input placeholder={"Enter your last name"} label={"Last Name"}/>
              <Input placeholder={"Enter your email"} label={"Email"}/>
              <Input placeholder={"Enter your password"} label={"Password"}/>
          </div>
          <div className='flex items-center justify-center w-full'>
            <Button title={"Sign up"} type={"gradient"}/>
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <Subheading text={"already a user ? "}/><span className='font-xl font-bold underline cursor-pointer'>Sign in</span>
          </div>
      </form>
    </div>
  )
}

export default Signup