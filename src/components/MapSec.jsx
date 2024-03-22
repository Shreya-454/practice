import React from 'react'
import Button from './Button'
import Link from 'next/link'
const myArray = [
    {
        name:'Shreya',
        id:"454",
        para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, praesentium."
    },
    {
        name:"Priyanka",
        id:"390",
        para:"Lorem ipsum dolor sit"
    },
    {
        name:"Roshni",
        id:"384",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing."
    }

]
const MapSec = () => {
    const cards = myArray.map((myArray,i) => (
<div className="w-[400px] h-[250px] border border-solid border-[red] flex  flex-col items-center  p-10 rounded-xl  justify-center mx-5">
    <h3 className='text-white text-5xl'>{myArray.name}</h3>
    <p className='text-[red] text-3xl'>{myArray.id}</p>
    <p className='text-xl'>{myArray.para}</p>
   </div>
    ))
  return (
    <div>
        <div className=' flex justify-center items-center mb-20'>
           {cards}  
        </div>
        <div className=' flex justify-center'>
          <Link href="./about" ><Button text="About" /></Link>  
        </div>
    </div>
  )
}

export default MapSec
