import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
    <footer>
        <div className='container'>
            <h4>Shortly</h4>
            <ul>
                <li>features</li>
                <li>link shortening</li>
                <li>branded links</li>
                <li>analytics</li>
            </ul>
            <ul>
                <li>resources</li>
                <li>blog</li>
                <li>developers</li>
                <li>support</li>
            </ul>
            <ul>
                <li>company</li>
                <li>about</li>
                <li>our team</li>
                <li>careers</li>
                <li>contact</li>
            </ul>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
                <FaInstagram className='icon' />
            </div>
        </div>
    </footer>
    )
}

export default Footer
