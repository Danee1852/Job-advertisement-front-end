import Logo from '../images/Logo1.png';
import './Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {

    const [clicked, setClciked] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);       // use this for condition rendering sign in and sign up buttons   
                                                            // when the user is logged in, the button should contains user name
    const handleClick = () => {
        setClciked(!clicked);
    }
    return(

        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
         
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'><a href ='/' className="nav-item-text">Job offers</a></li>
                <li className='nav-item'><a href ='/' className="nav-item-text">About Us</a></li>
                <li className='nav-item'><a href ='/' className="nav-item-text">Contact</a></li>
                <li className='nav-item'><a href ='/'><button className="nav-buttons">Sign In</button></a></li>  
                <li className='nav-item'><a href ='/'><button className="nav-buttons">Sign Up</button></a></li>
            </ul>

            <div className='hamburger' onClick={handleClick}>
                {clicked ? (<FaTimes size={30}/>): <FaBars size={30}/>}
                
            </div>
        </div>
    );
}


export default Navbar;