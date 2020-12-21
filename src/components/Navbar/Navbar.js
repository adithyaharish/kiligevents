import React, { useState, useEffect }  from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {Link} from 'react-scroll';

import { Nav, NavbarContainer,  
    MobileIcon,NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
    ImgWrapper,
    Img} 
    from './Navbar.elements';

    

const Navbar = () => {
    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);



    return (
        <>

       <IconContext.Provider value={{ color: '#fff' }}>
            <Nav> 
            <NavbarContainer>
             
    <ImgWrapper to="/" onClick={closeMobileMenu} start='true'>

                <Img src= {require('../../images/KILIG LOGO.jpg').default} alt={'img'} />
    </ImgWrapper>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes />: <FaBars />}
                </MobileIcon>

                <NavMenu onClick={handleClick} click={click}>

              <NavItem>
              <Link  to="home" spy={true} smooth={true}>
                <NavLinks>
                  Home
                  
                </NavLinks>
                </Link>
              </NavItem>
              
              <NavItem>
              <Link  to="gallery" spy={true} smooth={true}>
              <NavLinks>
              
                  Gallery
                
                </NavLinks>
                </Link>
              </NavItem>

              <NavItem>
              <Link  to="services" spy={true} smooth={true}>
                <NavLinks>
                  Services 
                </NavLinks>
                </Link>
              </NavItem>
 
              <NavItemBtn>
                {button ? (
                  <NavBtnLink>
                    <Link  to="reach out" spy={true} smooth={true}>
                    <Button primary>REACH OUT</Button>
                    </Link>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink>
                    <Link  to="reach out" spy={true} smooth={true}>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      REACH OUT
                    </Button>
                    </Link>
                  </NavBtnLink>
                )}
              </NavItemBtn>


              </NavMenu>

                </NavbarContainer>   
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar ;
