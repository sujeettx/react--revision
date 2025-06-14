import React from 'react'
import {
    NavLink
} from 'react-router-dom'
import '../index.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'active-nav' : " "} >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) => isActive ? 'active-nav' : ""} >
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/feedback'
                        className={({ isActive }) => isActive ? 'active-nav' : ""} >
                        Feedback
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) => isActive ? 'active-nav' : ""} >
                        contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/About'
                        className={({ isActive }) => isActive ? 'active-nav' : ""} >
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
