import React from 'react'
import TopNav from './TopNav'
import Navbar from './Navbar'


function Header() {
    return (
        <header className=''>
            <div>
                <TopNav></TopNav>
                <Navbar></Navbar>
            </div>
        </header>
    )
}

export default Header