import {React, useState} from 'react'
import {BsChevronCompactDown} from 'react-icons/bs'
import styled from 'styled-components'
import {BsJustify} from 'react-icons/bs'
import logo2 from '../../image/logorm.png'
import { WindowDesktop } from 'react-bootstrap-icons'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Drops= () => {
const[dropdownCover, setdropdownCover] = useState(false);

const changeBackground = ()=>{
  if(window.scrollY>=80){
    setdropdownCover(true);
  }else{
    setdropdownCover(false); 
  }
 
}
window.addEventListener('scroll', changeBackground)


  return (
    <div className={dropdownCover? 'dropdownCover active' : 'dropdownCover'}>

<CANVAS className="container-fluid relative   text-light  py-5 pb-10 canvass">

<div className='navbars row'>
<a class="navbar-brand relative col-auto" href="#">{
/* {<img className='rounded-circle'
        alt="Image" href="#home"
        src={logo2}
    />
    } */}
<h2 className='relative'>ICANWI</h2>
</a>
 <span className='menu ' style={{minWidth:'350px'}}>
  <span style={{minWidth:'150px', maxWidth:'350px'}} className='col-auto'>
  <span className='pt-4 menu-text  relative mt-3 '>
    <span className='menus hover:cursor-pointer'  
     data-bs-toggle="offcanvas" data-bs-target="#demo" >MENU</span>
    <span className='pt-3 activity-text absolute top-0 left-0'>
    organisation with clear purpose | Explore their activities</span>
    </span>
  </span>
 
  <span className='navbar-item col-auto'>

    <BsJustify data-bs-toggle="offcanvas" data-bs-target="#demo" 
 className='hover:cursor-pointer  pt-2 mr-5 relative hambuger'/>

  <BsChevronCompactDown 
 data-bs-toggle="offcanvas" data-bs-target="#demo" 
 className='hover:cursor-pointer dropIcon pt-2 mr-5 relative'/>
 
<span className='navbar-links d-flex ' >
 <a href='#' className='nav-link'>Sign-in</a>
    <a href='#' className='nav-link'>Register</a>
    </span>
 </span>
 
 </span>
</div>
<div className="offcanvas offcanvas-start offcanvas-cover  " id="demo">
  <div className="offcanvas-header">
  <h3 className="offcanvas-title">ICANWI</h3>
  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
  </div>
  <div className="offcanvas-body">
  <Nav className="me-auto d-flex flex-col">
  <NAVLINK href="#home"><span className='span'>Home</span></NAVLINK>
  <NAVLINK href="#link"><span className='span'>Gallary</span></NAVLINK>
  <NAVLINK href="#home"><span className='span'>Videos</span></NAVLINK>
  <NAVLINK href="#link"><span className='span'>Meeting Minutes</span></NAVLINK>
  <NAVLINK href="#home"><span className='span'>Activities</span></NAVLINK>
  <NAVLINK href="#link"><span className='span'>Acheivement</span></NAVLINK>
  </Nav>
  </div>
  <div className='buttons relative bottom-40 left-24 d-flex  flex-column justify-evenly' style={{maxWidth:'10rem'}}>

  <button type="button" className="btn  btn-customised"  style={{
  color:'#2948429 !important', 
  background: '#fff001',
  border:'3px solid #000',
   borderRadius:'15px',
   boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
   boxshadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)'
   }}>
  Sign-in
  </button>
  <button type="button" className="btn btn-customised my-3" style={{color:'white', background: '#2948429', 
  border:'3px solid #ccc',
  borderRadius:'15px',

  boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
  boxshadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)'
  }}>
    Register
    </button>

  </div>
 
</div>
</CANVAS>
    </div>
  )
}

export default Drops

const NAVLINK = styled(Nav.Link)`
    color:#f56038 !important;
    font-size:1.2rem;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-weight:700;
    border-bottom: 1px solid #ccc;
    display:inline-block;
    position: relative;
    min-height:40px;
    span{
    position:absolute;
    top:.8rem !important;
    height:80px !important;
    left:7rem !important;
    }
`

const CANVAS = styled.div`
.navbars{
max-width:480px;
min-width:480px;
display:grid;
grid-template-columns: repeat(2, auto);
align-items: center;
padding-top:2%;
padding-left:5%;
max-height:80% !important;
border-bottom: 1px solid #d59253;
top:-3rem;
position:relative;
z-index:1000 !important;
left:-2rem !important;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
rgba(0, 0, 0, 0.8) 0px -79px 40px 0px inset,
rgba(0, 0, 0, 0.06) 0px 2px 1px, 
rgba(0, 0, 0, 0.09) 0px 4px 2px, 
rgba(0, 0, 0, 0.09) 0px 8px 4px,
rgba(0, 0, 0, 0.09) 0px 16px 8px,
rgba(0, 0, 0, 0.09) 0px 32px 16px;

@media(max-width:992px){
max-width:600px;
.menu-text>.menus {
  box-shadow:none;
  color:white !important;
}
}
@media only screen and (max-width: 
  550px) and (min-width: 320px) {
  max-width:100vw !important;
  margin:auto !important;
  left:0 !important;
  padding-left:6%;
  padding-bottom:2% !important;
  }


.hambuger{
  visibility:hidden;
  font-size:2.5rem;
  color:white;
  font-weight:600;
  
}
.dropIcon{

  font-size:2.5rem;
  color:white;
  font-weight:600;
}
@media(max-width:786px){
 h2{
  top:.5rem !important
 }
  .hambuger{
  visibility:visible !important;
  left:7rem !important;
}
.dropIcon, .activity-text, .menu-text{
  visibility:hidden !important;
}
min-width:100vw !important;
max-width: 100vh !important;
}

@media only screen and (max-width: 
  550px) and (min-width: 420px) {
    .hambuger{
  left:4rem !important;
}

  }

  @media only screen and (max-width: 
  420px) and (min-width: 320px) {
    .hambuger{
  left:1rem !important;
}

  }

.menu{
min-width:80px !important;
max-width:auto !important;
display:grid;
grid-template-columns:repeat(2, auto)
}
.menu-text{
  color:#f9f6ed !important;
  top:1rem;
  left:4rem;

}
.activity-text{
min-width:250px;
visibility:hidden;
}
.navbar-item{
  display:grid;
  grid-template-columns:repeat(3, auto);
  justify-items:center;
  align-items:center;

}
.navbar-links {
  justify-content:space-around;
   max-width:10rem !important;
   min-width:10rem !important;
   flex-wrap:wrap;
   position:absolute;
   right: -30rem;
   visibility:hidden;
   @media only screen and (max-width:1200px)
    and (min-width:1000px){
      right:-20rem
    }
   @media(max-width:1000px){
    right:-18rem
   }
   @media(max-width:992px){
   display:none !important;
   }
}


h2{
font-weight:900;
text-shadow: 2px 2px 3px rgba(255,255,255,0.6);
}




}

`
