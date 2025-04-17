import React from 'react'
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom'
import Style from '../Main.css';

const Navbar = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	}
  return (
  <>
  <header>
  <Link to="/home" className='logo'>News_Hub</Link>
			<nav ref={navRef}>
				<Link to='/home'>Home</Link>
				<Link to='/sport'>Sports</Link>
				<Link to='/Politics'>Politics</Link>
				<Link to='/Busines'>Business</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</header>
	
  </>
  )
}

export default Navbar
