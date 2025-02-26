import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    CALLI COIN&nbsp;<i class='fa-solid fa-shield-cat'></i>   
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
                            <Link to='/callicoinsreact/market' className='nav-links' onClick={closeMobileMenu}>
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
                            <Link to='/account' className='nav-links-mobile' onClick={closeMobileMenu}>
                            ACCOUNT
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>ACCOUNT</Button>} */}
                </div>
            </nav>
        </>
    );
}

export default Navbar
