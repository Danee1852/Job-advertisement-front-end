import Logo from '../images/Logo1.png';
import './Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {

    const [clicked, setClciked] = useState(false);

    const handleClick = () => {
        setClciked(!clicked);
    }
    return(

        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'><a href ='/'>Job offers</a></li>
                <li className='nav-item'><a href ='/'>About Us</a></li>
                <li className='nav-item'><a href ='/'>Contact</a></li>
            </ul>

            <div className='hamburger' onClick={handleClick}>
                {clicked ? (<FaTimes size={30}/>): <FaBars size={30}/>}
                
            </div>
        </div>
    );
}


export default Navbar;