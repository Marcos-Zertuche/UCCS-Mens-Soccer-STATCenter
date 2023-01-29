import React, {useState} from 'react'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize',showButton);

    return (
<>
    <nav className = "navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo"> 
            UCCS Men's Soccer STATHub <img></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/stathub' className='nav-links' onClick={closeMobileMenu}>
                    STATHub
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/past-seasons' className='nav-links' onClick={closeMobileMenu}>
                    Past Seasons
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}

        </div>
  </nav>
</>
    
  )
}

export default Navbar
