import React from 'react'
import GradientHeading from '../components/GradientHeading'
import Subheading from '../components/Subheading'
import GradientSub from '../components/GradientSub'
import Card from '../components/Card'
import features from "../constants/features.json"
import backend from "../constants/backend.json"
import frontend from "../constants/frontend.json"
const About = () => {
  return (
    <section className='grid min-h-screen place-items-center'>
        <div className='p-4 flex flex-col items-center gap-8 justify-center'>
            <GradientHeading label={"About Our Project"}/>
            <Subheading text={"Overview"}/>
            <p className="font-inter  text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose text-gray-700">This project enables users to manage their accounts, view balances, and easily transfer funds to contacts.
            <br></br> Our mission was to create a streamlined, user-friendly payment experience with a modern tech stack and robust </p>
            <GradientHeading label={"What Our Platform Does"}/>
            <p className="font-inter  text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose text-gray-700">Our payment system provides a comprehensive solution for digital transactions with these key features:</p>
            <div className='grid md:grid-cols-3'>
                {features.map((feature)=>{
                    return(
                        <Card>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-2xl font-merriweather'>{feature.title}</h1>
                                <p className='font-inter text-lg'>{feature.description}</p>
                            </div>
                        </Card>
                    )
                })}
            </div>
            <GradientHeading label={"Tech Stack"}/>
            <Subheading text={"Backend Development"}/>
            {
                backend.map((tech)=>{
                    return(
                        <ul key={tech.title}>
                            <li className='font-inter text-lg  text-gray-800' >{tech.title} : {tech.description}</li>
                        </ul>
                    )
                })
            }
             <Subheading text={"Frontend Development"}/>
             {
                frontend.map((tech)=>{
                    return (
                        <ul key={tech.title}>
                            <li className='font-inter text-lg text-gray-800'>{tech.title} : {tech.description}</li>
                        </ul>
                    )
                })
             }
        </div>
    </section>
  )
}

export default About