import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer(){
  return(
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Discover our online courses and become a professional.
        </p>

        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Type your Email...'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>

        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Navigation</h2>
            <Link to='/'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/about'>About</Link>
            <Link to='/sign-up'>Sign Up</Link>
          </div>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Contact Info</Link>
            <Link to='/'>About Us</Link>

          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Legal</h2>
            <Link to='/'>Terms</Link>
            <Link to='/'>Privacy</Link>

          </div>
        </div>

      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              MAUROGZ
            </Link>
          </div>
          <small class='website-rights'>Website created by MAUROGZ © 2020</small>
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
              class='social-icon-link linkedin'
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

export default Footer;
