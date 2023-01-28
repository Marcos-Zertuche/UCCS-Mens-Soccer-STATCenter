import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

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
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/corners' className='nav-links' onClick={closeMobileMenu}>
                    Corners
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/penalties' className='nav-links' onClick={closeMobileMenu}>
                    Penalties
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/past-seasons' className='nav-links' onClick={closeMobileMenu}>
                    Past Seasons
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/add-game' className='nav-links' onClick={closeMobileMenu}>
                    Add Game
                    </Link>
                </li>
            </ul>

        </div>
  </nav>
</>
    
  )
}

export default Navbar
