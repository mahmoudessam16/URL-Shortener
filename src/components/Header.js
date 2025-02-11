import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from './MobileMenu';

const Header = () => {
    const [showIt, setShowIt] = useState(false);
    return (
        <header className='container'>
            <nav>
                <img src={logo} alt='logo' />
                <ul>
                    <li><a href='#features'>Features</a></li>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li><a href='#resources'>Resources</a></li>
                </ul>
            </nav>
            <article>
                <button>Login</button>
                <button>Sign Up</button>
            </article>
            <figure className='show'>
                <RxHamburgerMenu className='icon' onClick={() => setShowIt(!showIt)} />
            </figure>
            <MobileMenu showIt={showIt} />
        </header>
    )
}

export default Header
