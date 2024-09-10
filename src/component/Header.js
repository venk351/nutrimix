import React from 'react'
import companyLogo from '../Designer.jpeg'

export default function Header(){
    return(
        <header className='header'>
            <img className='logo' src={companyLogo} alt="logo"></img>
        </header>
    )
}