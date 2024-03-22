import React from 'react'
import Button from './Button'
import Link from 'next/link'

const About = () => {
  return (
    <div className=' flex flex-col justify-center items-center min-h-screen'>
      <p className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, neque.</p>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, odit? Ad ipsam vero at! Quasi inventore repellat cum dolor at!</p>
      <div className=' flex justify-center items-center mt-10'>
          <Link href="./"><Button text="Home"/></Link>
      </div>
    </div>
  )
}

export default About
