import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="container">
      <header>
        <div className='logo-wrap'>
          <Link to='/home' className='logo'>
            <img src='logo.png' alt='Logo' />
          </Link>
          
        </div>
        <div className={`menu-lists ${menuOpen ? 'open' : ''}`}>
          <a href="#feature" className='menuLink'>
            <div className='text'>Features</div>
          </a>
          <a href='#influencers' className='menuLink'>
            <div className='text'>Influencers</div>
          </a>
          <a href='#contact' className='menuLink'>
            <div className='text'>Contact</div>
          </a>
          {/* <a href='#blogs' className='menuLink'>
            <div className='text'>Blogs</div>
          </a> */}
          <a href='#faqs' className='menuLink'>
            <div className='text'>FAQs</div>
          </a>
        </div>
        <div className='hamburger' onClick={toggleMenu}>
            <div className={menuOpen ? 'bar bar1 open' : 'bar bar1'}></div>
            <div className={menuOpen ? 'bar bar2 open' : 'bar bar2'}></div>
            <div className={menuOpen ? 'bar bar3 open' : 'bar bar3'}></div>
          </div>
        <div className='btn-download'>
          <div className='icons'>
            <a href="https://apps.apple.com/us/app/chuki-ai-food-scanner-app/id6503965575" className='img-part' target='_blank'>
              <img src='android.svg' alt='Logo' />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.chuki.app.chuki&hl=en_US" className='img-part' target='_blank'>
              <img src='playstore.svg' alt='Logo' />
            </a>
          </div>
          <div className='text'>Download Now</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
