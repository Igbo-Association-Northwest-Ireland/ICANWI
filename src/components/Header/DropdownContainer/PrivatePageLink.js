import React from 'react'
import {BsChevronCompactDown} from 'react-icons/bs'
import styled from 'styled-components'
import {BsJustify} from 'react-icons/bs'
import logo2 from '../../image/logorm.png'
import { WindowDesktop } from 'react-bootstrap-icons'
import {Container,Navbar, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Modals from '../../Header/DropdownContainer/Modals'
import Register from '../../Header/DropdownContainer/Register'
import { useAuth } from '../../../Auth'
import { useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router';

const PrivatePageLink = () => {
  

    const auth = useAuth();
    const navigate = useNavigate()
    const locations = useLocation();
    const redirect = locations.state?.path || '/'
  
  const signout = ()=>{
    auth.logout()
    navigate(redirect, {replace: true})
  }
  
    function refreshPage() {
      window.reload(false);
    }
  
    return (
      <>
  
  <div className='dropdownCover active'>
  
        <CANVAS className="container-fluid relative   text-light  py-5 pb-10 canvass">
  
          <div className='navbars  row'>
            <a class="navbar-brand relative col-auto" href="#">
              <h2 className='relative'>ICANWI</h2>
            </a>
            <span className='menu ' style={{ minWidth: '350px' }}>
              <span style={{ minWidth: '150px', maxWidth: '350px' }}
                className='col-auto'>
                <span className='pt-4 menu-text  relative' style={{top:'15%'}}>
                  <span className='menus hover:cursor-pointer'
                    data-bs-toggle="offcanvas" data-bs-target="#demo">MENU</span>
                  <span className='pt-3 activity-text absolute top-0 left-0'>
                    organisation with clear purpose | Explore their activities</span>
                </span>
              </span>
  
              <span className='navbar-item col-auto'>
  
                <BsJustify data-bs-toggle="offcanvas" data-bs-target="#demo"
                  className='hover:cursor-pointer  pt-2 mr-5 relative hambuger' />
  
                <BsChevronCompactDown
                  data-bs-toggle="offcanvas" data-bs-target="#demo"
                  className='hover:cursor-pointer dropIcon pt-2 mr-5 relative' />
  
                <LEGIT className='navbar-links Auth-btn'>
                  <Button className=
                  'logout-btn bg-transparent outline-none shadow-none'
                  onClick={signout} 
                  >
                    <span className='span-log outline-none shadow-none'>Logout</span></Button>
                  <a href='#' className='register'><span className='span-log'><Modals/></span></a>
                </LEGIT>
              </span>
            </span>
          </div>
          <div className="offcanvas offcanvas-start offcanvas-cover  "
            id="demo">
            <div className="offcanvas-header">
              <h3 className="offcanvas-title">ICANWI</h3>
              <button type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"></button>
            </div>
         
            <div className="offcanvas-body">
              <Nav className="me-auto d-flex flex-col">
            
                <NAVLINK id='gallary' to="/" onClick={refreshPage}><span className='span'>Home</span></NAVLINK>
                <NAVLINK to="/Gallary" onClick={refreshPage}><span className='span' >Gallary</span></NAVLINK>
                <NAVLINK to='/Videos' onClick={refreshPage}><span className='span'>Videos</span></NAVLINK>
                <NAVLINK to='/SignIn' onClick={refreshPage}><span className='span'>Minutes</span></NAVLINK>
                <NAVLINK to='/Activities' onClick={refreshPage}><span className='span'>Activities</span></NAVLINK>
                <NAVLINK to='/Acheivement' onClick={refreshPage}><span className='span'>Acheivement</span></NAVLINK>
              </Nav>
        
            </div>
         
          
    
            <div className='buttons relative bottom-20 left-24 d-flex  flex-column justify-evenly'
              style={{ maxWidth: '10rem' }}>
  
               <button type="button" className="btn  btn-customised buttonx" style={{
                color: '#2948429 !important',
                background: '#fff001',
                border: '3px solid #000',
                borderRadius: '15px',
                boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
                boxshadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)'
              }}>
                Sign-in
              </button>
              <span className='REG'><Register className="" /></span>
            </div>
          </div>
  
        </CANVAS>
      </div>
     
      </>
  
    )
  }
  
  export default PrivatePageLink 
  const LEGIT = styled.span`
 
             
           `
  const NAVLINK = styled(NavLink)`
      color:#f56038 !important;
      font-size:1.2rem;
      font-family:Verdana, Geneva, Tahoma, sans-serif;
      font-weight:700;
      border-bottom: 1px solid #ccc;
      padding-bottom:3rem !important;
      display:inline-block;
      position: relative;
      min-height:40px;
      span{
      position:absolute;
      top:1.6rem !important;
      left:7rem !important;
      @media(max-width:996px){
        top:1.3rem !important;
      }
      @media(max-width:786px){
        font-size:1.5rem !important;
        top:1rem !important;
     
      }
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
  top:-3rem;
  position:relative;
  z-index:1000 !important;
  left:-2rem !important;
  
  
  @media(max-width:992px){
  max-width:600px;
  padding-bottom:1% !important;
  .menu-text>.menus {
    box-shadow:none;
    color:white !important;
    border-bottom: 1px solid #d59253;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
  rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
  rgba(0, 0, 0, 0.8) 0px -79px 40px 0px inset,
  rgba(0, 0, 0, 0.06) 0px 2px 1px, 
  rgba(0, 0, 0, 0.09) 0px 4px 2px, 
  rgba(0, 0, 0, 0.09) 0px 8px 4px,
  rgba(0, 0, 0, 0.09) 0px 16px 8px,
  rgba(0, 0, 0, 0.09) 0px 32px 16px;
   
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
    top:.5rem !important;
   }
   h3{
    font-size:2.5rem !important;
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
  
  
  



