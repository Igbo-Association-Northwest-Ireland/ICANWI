import React from 'react'
import logo from '../image/logo2.png'
import logo1 from '../image/logo.png'
import logo2 from '../image/logorm.png'
import light from '../image/lightingbg.jpg'
import dark from '../image/darkbg.png'
import Avatar from 'react-avatar';
import DropdownMenu from './DropdownMenu';
import { FaAngleDown, FaChevronDown, FaHome } from "react-icons/fa";
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap'
import './Header.css'
import styled from 'styled-components'
const navs = Navbar.Collapse;
let logs;

const Navab = () => {
    return (
        <NAVBARS bg="dark" variant="dark" expand='lg' style={{ minWidth: '100vw' }}>
            <CONTAINER fluid className=' overflow-hidden py-2' style={{ paddingLeft: '5rem', paddingRight: '3rem' }}>

                {/*             NAVBAR BRAND SECTION STARTS HERE
 */}

                <BRAND href="#home" className='rounded-circle position-relative' >
                    {<img
                        alt="Image" href="#home"
                        src={logo2}
                    />
                    }
                </BRAND>

                {/* NAVBAR BRAND SECTION STOPS HERE      AND         TOOGLE COMPONENTS SECTION STARTS
 */}
                <Navbar.Toggle />
                <Navbar.Collapse className="colap">

                    <Nav className="me-auto">
                        <SPAN className=' spancover'>
                            <a href="#home2" className='navbar-brand'><FaHome className=' spc home ' /></a>
                            <span className='subspan position-relative right-8'>
                                <span className=' spc spc2'>Explore the list of our activities</span>
                                <span className='spc dropdown position-relative right-12 lg:right-8 '><DropdownMenu /></span>
                            </span>
                        </SPAN>
                    </Nav>
                    <LINK className='links position-relative'>
                        <span>
                            <span className='linkinfo info-sign me-2'>
                            </span>
                            <a href="#login" className='btn btn-sm text-light shadow-2xl link1 position-relative left-5'>Read | Meeting Minutes
                            </a>
                        </span>

                        <span className='position-relative'>
                            <span className='linkinfo info-register me-2'>
                            </span>
                            <a href="#login" className='btn btn-sm  link2'>Click here to join us
                            </a>
                        </span>
                    </LINK>
                </Navbar.Collapse >

                {/*    TOOGLE COMPONENTS SECTION STOPS HERE
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
    height:100%
    
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
.subspan{
  
    display: grid;
    grid-template-columns: repeat(2, 280px 120px);
   
    }
  

.spc{
    display:block;
    width: auto;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight:700;
}
.spc1{
    color:white;
    font-size:2rem
}
.dropdown{transform: perspective(500px) scale3d(1.3, 1.0, 0.2) translateZ(100px);
  transform-origin: left;

}

.home{
    color:white;
    margin-left:-70%; 
    font-size:2rem;
    
}
.spc2{margin-left:5%;
    color:white;
}

/* @media(max-width:1050px){
    grid-template-columns: fit-content(15%) fit-content(1%) 1fr;
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

    .home{display:none
      };
.dropdown{ margin-left:-5%;
    margin-top:-5%;
};
    .subspan{
    padding-left:10% !important;
    align-items: center;
    padding-bottom:12% !important;
    min-width:100%;
    max-width:100%;
    margin:0;
    font-size:1rem;
    }
} 
@media(max-width:760px){
        margin:0;
    .subspan{
    padding:0;
    }
}
`
const LINK = styled.div`
display:grid;
    gap:10px;
    grid-template-columns: repeat(2, auto);
    justify-content: space-evenly;
    align-items: center;
    min-width:450px;
    max-width:550px;
    
    .linkinfo{color:white !important; 
     
    }
    .info-sign{position:absolute; left:-20%;
    }
   .link1{background:#f4a044;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     min-width: 180px !important;
      padding:4% 2%; 
      border-radius:15px;
      font-weight:700;
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
   .link2{background:#d8d0ff; color:#1e154e; 
       min-width: 150px !important;
       border-radius:15px;
      padding:4% 2%; 
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight:700;
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
      

}
     a{
/* width:155px;
border:1px solid #833ab4;
border-radius:15px;
border:1px solid transparent;
background: url("images/picker_mask.png");
	background: -moz-linear-gradient(bottom, #000 0%, rgba(0, 0, 0, 0) 100%),
				-moz-linear-gradient(left, #FFF 0%, rgba(255, 255, 255, 0) 100%);
	background: -webkit-linear-gradient(bottom, #000 0%, rgba(0, 0, 0, 0) 100%),
				-webkit-linear-gradient(left, #FFF 0%, rgba(255, 255, 255, 0) 100%);
	background: -ms-linear-gradient(bottom, #000 0%, rgba(0, 0, 0, 0) 100%),
				-ms-linear-gradient(left, #FFF 0%, rgba(255, 255, 255, 0) 100%);
	background: -o-linear-gradient(bottom, #000 0%, rgba(0, 0, 0, 0) 100%),
				-o-linear-gradient(left, #FFF 0%, rgba(255, 255, 255, 0) 100%);
	background-color: #F00;
background-origin:border-box;
background-clip:content-box, border-box;
 */


}
    @media(max-width:992px){
    grid-template-columns: repeat(1, auto);
    margin-left:15%;
    justify-content: center;
    min-width:450px;
    max-width:450px;
    .link2{
        margin-left:18%;
    }
    }
    @media(max-width:760px){
        .linkinfo{display:none};
        grid-template-columns: repeat(2, auto);
        margin:0
    }

`


const CONTAINER = styled(Container)`
box-sizing:border-box;
background-color:#1e154e;
img{
    color:whitesmoke
};
-webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);
@media(max-width:992px){
    padding-bottom:3% !important;
}
`


/* font-family: 'Open Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'PT Sans', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Roboto', sans-serif; */