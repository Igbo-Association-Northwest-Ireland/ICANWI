import {React, useState } from 'react';
import {BsChevronCompactDown} from 'react-icons/bs';
import styled from 'styled-components';
import {BsJustify} from 'react-icons/bs';
import {NavLink, useNavigate} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Modals from './Header/DropdownContainer/Modals'
import Register from './Header/DropdownContainer/Register';
import AboutUs from './Body/AboutUs';
import WhatweDo from './Body/WhatweDo';
import Myteam from './Body/Myteam';
import Video from './Body/Video';
import Language from './Body/Language';
import Nativefood from './Footer/Nativefood';
import Pictures from './Body/Pictures';
import Footer from './Footer/Footer';
import Page from './Pages/Page';
import HeroImage from './Body/HeroImage';
import Label from './Pages/Label';
import { BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
/*   
"homepage": "http://Igbo-Association-Northwest-Ireland.github.io/ICANWI",
 */  
  const Home= () => {
return(
<>
<Label/>
<HeroImage/>
    <AboutUs/>
    <WhatweDo/>
     <Myteam/>
     <Video/> 
     <Language/>
     <Nativefood/>
     <Pictures/>
    <Footer/>
</>
  )
}

export default Home 

