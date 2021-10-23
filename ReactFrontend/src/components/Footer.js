import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer-container'>
      <section className='footer-subscription'>
        <h1 className='footer-subscription-heading'>
          Join the Adventure
        </h1>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            Instashare
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>INTS © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Footer
