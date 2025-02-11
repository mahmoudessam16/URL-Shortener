import React from 'react'

const MobileMenu = ({ showIt }) => {
    return (
        <section className='mobile container' style={{display: showIt ? "block" : "none" }}>
            <ul>
                <li><a href='#features'>Features</a></li>
                <li><a href='#pricing'>Pricing</a></li>
                <li><a href='#resources'>Resources</a></li>
            </ul>
            <hr />
            <div className='btns'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </section>
    )
}

export default MobileMenu
