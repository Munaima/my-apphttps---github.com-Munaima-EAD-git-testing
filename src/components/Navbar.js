import React from 'react' 
import {NavLink} from 'react-router-dom'
export const Navbar = ()=>{

    const navLinkstyle = ({ isActive}) =>{
        return {
            fontweight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
    }
    }

    

    return (
    <nav>
        <NavLink style={navLinkstyle} to='/'>Home</NavLink>
        <NavLink style={navLinkstyle} to='About'>About</NavLink>
        <NavLink style={navLinkstyle} to='Products'>Products</NavLink>



    </nav>
    )
    
    }
