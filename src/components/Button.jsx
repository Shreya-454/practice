import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='text-black bg-white px-4 py-3 font-bold rounded-lg'>{props.text}</button>
    </div>
  )
}

export default Button
