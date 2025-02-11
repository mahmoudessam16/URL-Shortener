import React from 'react'
import workImage from '../images/illustration-working.svg'

const LandingPage = () => {
    return (
        <section className='landing container'>
            <article>
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights 
                on how your links are performing.</p>
                <button>Get Started</button>
            </article>
            <figure>
                <img src={workImage} alt='illustration-work' />
            </figure>
        </section>
    )
}

export default LandingPage
