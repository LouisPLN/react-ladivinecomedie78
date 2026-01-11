import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/components/Buttons/Linker.css"
import Arrow from "../../assets/images/icon-arrow.svg"

const Linker = ({ to, children, target }) => {
  return (
    <Link to={to} className="linker-button" target={target}>{children} <img src={Arrow} className='arrow-linker' alt="" /></Link>
  )
}

export default Linker