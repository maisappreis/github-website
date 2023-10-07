import React, { useState } from 'react';
import './Navbar.css';
import "../../main/App.css";


function NavbarOverlaid() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 800) {
  //     console.log('dropdown', dropdown)
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <>
      <nav className='posit-abs position font-marcellus'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu just-center active' : 'nav-menu just-center'}>
          <li className='nav-item'>
            <a href="#home" className='font-white' onClick={closeMobileMenu}>HOME</a>
          </li>
          {/* <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> */}
          <li className='nav-item'>
            <a href="#conhecimentos" className='font-white' onClick={closeMobileMenu}>CONHECIMENTOS</a>
          </li>
          <li className='nav-item'>
            <a href="#sobre" className='font-white' onClick={closeMobileMenu}>SOBRE</a>
          </li>
          <li className='nav-item'>
            <a href="#curriculum" className='font-white' onClick={closeMobileMenu}>CURRICULUM</a>
          </li>
          <li className='nav-item'>
            <a href="#contato" className='font-white' onClick={closeMobileMenu}>CONTATO</a>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavbarOverlaid;