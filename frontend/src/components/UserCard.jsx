import React from 'react'
import { LOGO_URL } from '../constants/utils'
import Heading from './Heading'
import Card from './Card'
import Button from './Button'

const UserCard = ({balance,name,email,getBalance}) => {
  return (
    <Card>
        <h1 className='text-2xl font-merriweather'>{balance}</h1>
        <h1 className='font-merriweather'>{name}</h1>
        <h1 className='font-merriweather'>{email}</h1>
        <div className='max-w-[400px]'><Button type={"green"} title={"Fetch Balance"} onClick={getBalance}/></div>
    </Card>
  )
}

export default UserCard