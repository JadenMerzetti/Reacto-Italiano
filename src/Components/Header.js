import React from 'react';

function Header({ activeButton, setActiveButton }) {
  
  return (
    <header>
    <div className="header-content">
      <a
        href="#"
        className={
          activeButton === 'homepage' ? 'homepage-link active' : 'homepage-link'
        }
        onClick={() => setActiveButton('Homepage')}
      >
        Jaden Merzetti
      </a> 
        <nav className="nav-links">
          <ul>
            <li>
              <a
                href="#"
                className={activeButton === 'About Me' ? 'btn active' : 'btn'}
                onClick={() => setActiveButton('About Me')}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeButton === 'Portfolio' ? 'btn active' : 'btn'}
                onClick={() => setActiveButton('Portfolio')}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeButton === 'Resume' ? 'btn active' : 'btn'}
                onClick={() => setActiveButton('Resume')}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeButton === 'Contact Me' ? 'btn active' : 'btn'}
                onClick={() => setActiveButton('Contact Me')}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;


