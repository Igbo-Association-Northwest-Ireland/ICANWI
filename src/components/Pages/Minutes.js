import React, {useEffect, useState, useRef} from 'react'
import {Routes, Route, NavLink, useNavigate, Link} from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Footer from '../Footer/Footer';
import Modals from '../Header/DropdownContainer/Modals';
import styled from 'styled-components';
import {FaQuoteLeft, FaQuoteRight, FaRegCalendarCheck} from 'react-icons/fa'
import PrivatePageLink from '../Header/DropdownContainer/PrivatePageLink';
import Pdf from '../Pages/InnerPage/Pdf'




  const Minutes = () => {
  let refs = useRef();
  let navigation = useNavigate();
 


  function febMeeting(){
    navigation('/Feb2022meeting')
  }
  function matchMeeting(){
    navigation('/Match2022meeting')
  }

  function aprilMeeting(){
    navigation('/April2022meeting')
  }
  function mayMeeting(){
    navigation('/May2022meeting')
  }
  function juneMeeting(){
    navigation('/June2022meeting')
  }
  function septMeeting(){
    navigation('/Sept2022meeting')
  }
  function octMeeting(){
    navigation('/Oct2019Meeting')
  }

  function constitution(){
    navigation('/Constitution')
  }
  
  
  return (
    <div className='relative h-100vh'>
    { <PrivatePageLink mode={Modals} className='fixed top-0' />}
      <Container className='fluid text-dark ' style={{ minHeight: '100vh', height: 'auto' }}>
        <Container>
          <ROW className='mains-row'>
            <Col className = ' col-md-12 col-lg-7'>
          <TextPage className='jumbotron p-5 relative top-20 bottom-20 pb-10 text-justify'>

          {<Pdf/>}
     
           </TextPage>

          </Col>
          <Col className = ' col-md-12 col-lg-5 Columns relative top-32 '>
            <h3 className='d-flex w-100'><span><FaRegCalendarCheck className='mt-1 mx-1'/></span>Meeting Minutes | Date</h3>
            <p className ='relative top-12 left-2 grid grid-cols-1 gap-3 button-page '  >

            <BUTTON onClick={octMeeting}> Meeting Minutes <span>for October </span>| 9/10/2022</BUTTON>

            <BUTTON onClick={septMeeting}> Meeting Minutes <span>for September </span>| 18/09/2022</BUTTON>

  
          <BUTTON onClick={juneMeeting}> Meeting Minutes <span>for June </span>| 12/06/2022</BUTTON>

          <BUTTON onClick={mayMeeting}> Meeting Minutes <span>for May </span>| 8/05/2022</BUTTON>

          <BUTTON onClick={aprilMeeting}>Meeting Minutes <span>for April </span>| 10/04/2022</BUTTON>

          <BUTTON onClick={matchMeeting}> Meeting Minutes <span>for March </span>| 13/03/2022</BUTTON>

          <BUTTON onClick={febMeeting}> Meeting Minutes <span>for Feb </span>| 13/02/2022</BUTTON>

          <BUTTON onClick={octMeeting}> Meeting Minutes <span>for October </span>| 13/10/2019</BUTTON>

          
          </p>
          </Col>
          </ROW>
        </Container>
      </Container>
   {<Footer/>}
 </div>
    
  )
}
export default Minutes

const ROW = styled(Row)`
position:relative;
min-height:80vh;
height:auto;
@media(max-width:992px){
margin-bottom:3rem !important;
@media(max-width:786px){
display:grid;
grid-template-columns: repeat(1, auto);
justify-items:center;
align-items:center;
}
}
`

const TextPage = styled.div`
min-height:100vh !important;
height:auto;
padding-right:3rem !important;
margin-bottom:5rem !important;
@media(max-width:992px){
padding-right:2rem !important;
}
`
const BUTTON = styled(Button)`
background-color: #1c1cf0  !important;
border: 0px solid;
.constitute{
  background-color: #c30101  !important;
}
@media(max-width:996px){
  background-color: #E40078 !important;
  font-weight:700 !important;
  width:auto !important;
  padding:auto !important;
}
@media(max-width:786px){
span{
  display:none !important;
}
  
}
`
