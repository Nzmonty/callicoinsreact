import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                    CALLI <i class="fa-solid fa-shield-cat"></i>   
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/market' className='nav-links' onClick={closeMobileMenu}>
                            MARKET
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/wallet' className='nav-links' onClick={closeMobileMenu}>
                            WALLET
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/stash' className='nav-links' onClick={closeMobileMenu}>
                            STASH
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/account' className='nav-links' onClick={closeMobileMenu}>
                            ACCOUNT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
