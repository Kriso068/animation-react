import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Liste</Link>
      <Link to='/stateAnim'>State</Link>
      <Link to='/scroll'>Scroll</Link>
    </nav>
  )
}
