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
        <header className={`fixed w-full transition-all z-99 duration-300 ease ${offset > 0 ? 'bg-about fixed top-0 z-50 shadow-md' : ''} ' : ''}`}>
            <div>
                <TopNav offset={offset}></TopNav>
                <Navbar offset={offset}></Navbar>
            </div>
        </header>
    )
}

export default Header