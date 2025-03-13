import React from 'react'
import GradientHeading from '../components/GradientHeading'
import Subheading from '../components/Subheading'
import GradientSub from '../components/GradientSub'
import Card from '../components/Card'
import features from "../constants/features.json"
const About = () => {
  return (
    <section className='grid min-h-screen place-items-center'>
        <div className='p-4 flex flex-col items-center justify-center'>
            <GradientHeading label={"About Our Project"}/>
            <Subheading text={"Overview"}/>
            <p className='tracking-tighter'>This project enables users to manage their accounts, view balances, and easily transfer funds to contacts. Our mission was to create a streamlined, user-friendly payment experience with a modern tech stack and robust </p>
            <GradientSub label={"What Our Platform Does"}/>
            <p>Our payment system provides a comprehensive solution for digital transactions with these key features:</p>
            <div className='grid md:grid-cols-3'>
                {features.map((feature)=>{
                    return(
                        <Card>
                            <h1>{feature.title}</h1>
                            <p>{feature.description}</p>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default About