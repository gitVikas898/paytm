import React from 'react'
import { LOGO_URL } from '../constants/utils'
import Heading from './Heading'
import Card from './Card'
import Button from './Button'

const UserCard = ({balance,name,email,getBalance}) => {
  return (
    <Card>
        <div className='flex justify-between p-4'>
          <div className='grid gap 2'>
            <h1 className='text-2xl font-merriweather'>Balance : {balance}</h1>
            <h1 className='font-merriweather'>{name}</h1>
            <h1 className='font-merriweather'>{email}</h1>
          </div>
          <div className='w-[200px]'><Button type={"green"} title={"Fetch Balance"} onClick={getBalance}/></div>
        </div>
    </Card>
  )
}

export default UserCard