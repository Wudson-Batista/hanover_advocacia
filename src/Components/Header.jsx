import React, { useEffect, useState } from 'react'
import TopNav from './TopNav'
import Navbar from './Navbar'



function Header() {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`fixed w-full transition duration - 300 ease ${offset > 50 ? 'bg-red-500 fixed top-0 z-50 ' : ''} ' : ''}`}>
            <div>
                <TopNav offset={offset}></TopNav>
                <Navbar offset={offset}></Navbar>
            </div>
        </header>
    )
}

export default Header