import React from 'react'
import "../../styles/components/Buttons/Button.css"

const Button = ({type, children}) => {
  return (
    <button className='button text-white' type={type}>{children}</button>
  )
}

export default Button