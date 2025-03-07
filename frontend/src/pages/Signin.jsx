import React from 'react'
import Input from '../components/Input'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Button from '../components/Button'

const Signin = () => {
  return (
    <div className='grid min-h-screen place-items-center'>
      <form className='p-8 grid gap-4 shadow-lg rounded-md w-[400px] bg-white'>
          <div className='flex flex-col gap-2 items-center justify-between'>
              <Heading label={"Sign in"}/>
              <Subheading text={"Enter your details below"}/>
          </div>
          <div className='grid gap-2'>
              <Input placeholder={"Enter your email"} label={"Email"}/>
              <Input placeholder={"Enter your password"} label={"Password"}/>
          </div>
          <div className='flex items-center justify-center w-full'>
            <Button title={"Sign in"} type={"gradient"}/>
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <Subheading text={"Not a user ? "}/><span className='font-xl font-bold underline cursor-pointer'>Sign up now</span>
          </div>
      </form>
    </div>
  )
}

export default Signin