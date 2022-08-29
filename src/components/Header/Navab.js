import React from 'react'
import logo from '../image/logo2.png'
import logo1 from '../image/logo.png'
import logo2 from '../image/logorm.png'
import light from '../image/lightingbg.jpg'
import dark from '../image/darkbg.png'
import Avatar from 'react-avatar';
import { FaAngleDown, FaChevronDown, FaHome } from "react-icons/fa";
import {BsChevronCompactDown} from 'react-icons/bs'
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap'
import styled from 'styled-components'
import {BsJustify} from 'react-icons/bs'



const navs = Navbar.Collapse;
let logs;
const Navab = (props) => {
const Drops = props.Drops
return (
<NAVBARS  variant='light' expand='lg' style={{ minWidth: '100vw' }}>
<CONTAINER fluid className=' overflow-hidden py-2' style={{ paddingLeft: '5rem', paddingRight: '3rem' }}>

{/* NAVBAR BRAND SECTION STARTS HERE.......
*/}

<BRAND href="#home" className='rounded-circle position-relative brand' >
    {<img
        alt="Image" href="#home"
        src={logo2}
    />
    }
</BRAND>

{/* NAVBAR BRAND SECTION STOPS HERE....... 

TOOGLE COMPONENTS SECTION STARTS HERE.......

*/}
     <TOGGLER aria-controls="basic-navbar-nav" style={{border:'none', outline:'none'}}><HAMBURGER style={{border:'none', outline:'none'}}/></TOGGLER> 

{/* NAVBAR TOGGLE SECTION STOPS HERE AND .... 

......COLLAPSE COMPONENTS SECTION STARTS
*/}

    <COLLAPSE className="colap">
    <Nav className="me-auto">
{/*         activities dropdown button starts here
 */}        <SPAN className=' spancover'>
            <a href="#home2" className='navbar-brand'><FaHome className=' spc home ' /></a>
            <span className='activities-list-holder position-relative '>
                <span className=' activities-list'>Explore <span className='explore'>the list of </span> our activities</span>
                <span className='dropdowns position-relative'>{<Drops/>}</span>
            </span>
        </SPAN>
        {/* activities dropdown button stops here
 */} 
    </Nav>

    {/* Menu links button starts here
 */} 
    <LINK className='links position-relative'>
    <ul className="navbar-nav mr-auto me-5">
      <li className="nav-item active text-light">
        <a className="nav-link about-us-link" href="#">About us</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link  join-us-link" href="#">Join us</a>
      </li>
        </ul>
   
    </LINK>
</COLLAPSE >

{/*  TOOGLE COMPONENTS SECTION STOPS HERE
 */}

            </CONTAINER>
        </NAVBARS>
    )
}

export default Navab

/* STYLING STARTS HERE
 */
const NAVBARS = styled(Navbar)`
/*   clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
 */
`
const TOGGLER = styled(Navbar.Toggle)`

 :focus{box-shadow: none  !important}

`
const HAMBURGER = styled(BsJustify)`
color:white; font-size:2rem;

`
const BRAND = styled(Navbar.Brand)`
padding-top: 3rem  !important;
 min-width:80px;                
 min-height:80px;
-webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);
img{
position: absolute;
left:0;
right:0;
bottom: 0;
top:0;
width:100%;
height:100%;
}
@media(max-width:786px){
position:relative;
bottom:-5% !important;
}
`

const SPAN = styled.span`
transition:0.8s ease-in-out;
display: grid;
min-width:200px;
max-width:350px;
font-size: 1rem;
gap: 20px;
grid-template-columns: repeat(2, 50px 350px);
align-content: space-evenly;
align-items: center;
padding-left:3rem;
margin-left:2rem;
z-index: 200;
.activities-list-holder{
    z-index: 300;
    display: grid;
    grid-template-columns: repeat(2, 280px 120px);
    }
  

.dropdown{transform: perspective(500px) scale3d(1.3, 1.0, 0.2) translateZ(100px) & X(-50%);
  transform-origin: left;
 

}

.home{
color:white;
margin-left:-70%; 
font-size:2rem;

}
.activities-list{margin-left:3%;
    color:white;
}

/* 
THE LIST AND INFO MEDIA QUERY START HERE
} */

@media(max-width:992px){
grid-template-columns: repeat(1, auto);
align-items: center;
font-family: 'PT Sans', sans-serif;
width:auto;
position:relative;
left:15%;
margin-top:-2rem;
height:auto;
overflow:hidden;
margin-left:15%;
padding:0;
.activities-list
{
font-weight:700;
font-size: 1.2rem;
}
 .explore{
  display:none !important;
  }

    .home{display:none
      };
    .dropdown{ margin-left:-14%;
    margin-top:-5%;
};
    .activities-list-holder{
    padding-left:10% !important;
    align-items: center;
    padding-bottom:12% !important;
    min-width:100%;
    max-width:100%;
    position:relative;
    right:14%;
    font-size:1rem;
    }
} 
@media(max-width:760px){
     margin:0;
     position: relative;

    
}
`   
/* THE LINK MEDAI QUERY STARTS HERE
 */

const LINK = styled.div`
   
    .navbar-nav{
    .nav-link{color:white !important; 
        font-size:1.2rem;
        font-family: 'Raleway', sans-serif;
        font-weight:700;
        position:relative;
        display: inline-block; 
        width:auto;
       
    :hover.nav-link::after{
    width:80px;
    cursor:pointer
    }
    }
   .nav-link::after{
    content: "";
    position:absolute;
    top:80%;
    left:10%;
    right:0;
    bottom:0;
    width:0px;
    height:2px;
    background:orange;
    white-space: nowrap;
    -webkit-transition: width 0.5s ease-in-out;
    -moz-transition: width 0.5s ease-in-out;
    -o-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
   
   }
    
    @media(max-width:992px){
    grid-template-columns: repeat(1, auto);
    justify-items: center;
    align-items:center;
    min-width:250px;
    max-width:250px;
    gap:2%;
    background: red;
    .about-us-link{

    }
    .join-us-link{
    
    }
    
    }
    @media(max-width:760px){
       
    }
    }

`
/* Container and div collapse media query starts here
 */

const COLLAPSE = styled(Navbar.Collapse)`
position:relative;
  @media(max-width:760px){
       max-width:auto !important;
       min-height:auto !important;
       

      

   
   
    }
`
const CONTAINER = styled(Container)`
box-sizing:border-box;
z-index:100;
background-color:#1e154e;

-webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);
img{
    color:whitesmoke
};

@media(max-width:786px){
    padding-bottom:3% !important;
}
@media(max-width:992px){
    padding-bottom:5% !important;
    padding-right:15% !important;
}

`


/* font-family: 'Open Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'PT Sans', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Roboto', sans-serif; */