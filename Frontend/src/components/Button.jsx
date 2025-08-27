import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-green-500 p-2 rounded-xl cursor-pointer '>{name}</button>
    </div>
  )
}

export default Button
