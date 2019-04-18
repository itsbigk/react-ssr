import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <div className='nav'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/page2'>page 2</NavLink>
    <NavLink to='/page2/inner'>page 2 inner</NavLink>
    <NavLink to='/page3'>page 3</NavLink>
    <NavLink to='/page4'>page 4</NavLink>
  </div>
)

export default Nav
