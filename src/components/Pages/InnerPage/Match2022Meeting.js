import {React, useRef} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PrivatePageLink from '../../Header/DropdownContainer/PrivatePageLink';
import Footer from '../../Footer/Footer';
import { TableFooter } from '@mui/material';
import Modals from '../../Header/DropdownContainer/Modals';
import styled from 'styled-components';
import {Routes, Route, useNavigate, Link, Navigate } from 'react-router-dom';
import Minutes from '../Minutes';
import {FaQuoteLeft, FaQuoteRight, FaRegCalendarCheck} from 'react-icons/fa'


    const Match2022Meeting = () => {
    let navigation = useNavigate;
    let refs = useRef(null);

    function mayMeeting(){
      navigation('/May2022meeting')
    }
  
    function aprilMeeting(){
      navigation('/Minutes')
    }
  return (
    <div className='relative h-100vh'>
    { <PrivatePageLink mode={Modals} className='fixed top-0' />}
      <Container className='fluid text-dark ' style={{ minHeight: '100vh', height: 'auto' }}>
        <Container>
          <ROW className='main-row'>
            <div className = 'col col-sm-12 col-md-12 col-lg-7'>
          <TextPage className='jumbotron p-5 relative top-20 bottom-20 pb-10 text-justify'>

            <h2><strong>Match Minutes of the Meeting</strong></h2>
            <p><b>Date:</b> 13/03/2022</p>

            <p><strong>Members Present:</strong> Kingsley, Obodoechina, Francis, Emeka, Ugo, Chuks and obinna </p>
            <p><strong>Absentees:</strong> CJ, Billy and Eloka</p>
               
            <p><strong>Proceedings:</strong> The Meeting was called to order at 5: PM. Open prayer was said by Chairman. Minutes of the last meeting were taken by francis and approved as corrected by Chuks and Kinsley. Our visitors, Chidi Usanga and Onyedikachi were welcomed by the members. They were thanked for attending, and Vc encouraged them to try and be part of committee programs either individually or as a group.</p>

              <p><strong>Item discussed: <span className='text-danger'>Charitable Status Application</span> | <span className='text-primary'>Meeting Hosting</span></strong></p>
              <p> During the discussion of the charitable status, Francis stated that the application process had already begun, and that progress will be reviewed in the upcoming meetings. Regarding meeting hosting, a lengthy discussion was held- particularly how and where meetings should be conducted. Francis was of the opinion that the financial burden of hosting meetings should alleviated. The association should be responsible for food and drinks, and the host would be responsible for the venue only, which is the potential obstacle that might impede our progress. He noted that the alleviation would not only encourage members but would also make them more likely to accept the hosting plans.</p>
              <p>Kinsley, Obinna, and Chuks suggested that the host should be responsible for hosting, but he can only provide whatever he has. The later was approved by a majority vote</p>
              <p><strong>Any Other business:</strong> Ugo invited the association to join him in his campaign against hard borders on immigrants. However, members had a difficult time determining whether to accept or decline the invitation because they were unclear about the conditions and modalities of the protest. In the end, it was decided that the reasons for the protest must be clarified before any decisions can be made.</p>
              <p><strong>Finance:</strong>
              The sum of €120 was collected, €115 balance from Party contribution was also collected, €60 was given to the host, and €175 was given to the treasurer.
              The motion for adjournment was moved by francis, seconded by Billy at 7:30 pm.  
              The next meeting is scheduled for Mar 8th, 2020. 
              The closing prayer was said by Vc. 
              </p>
           
          </TextPage>
          </div>
          <div className = 'col col-sm-12 col-md-12 col-lg-5 Columns relative top-32'>
          <h3 className='d-flex w-100'>
            <span><FaRegCalendarCheck className='mt-1 mx-1 me-2 text-red-700'/>
            </span>Meeting Minutes by Date</h3>
          <p className ='relative top-12 left-2 grid grid-cols-1 gap-3 button-page'>

          <BUTTON as={Link} to='/Feb2022Meeting' 
          className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
            Minutes of the Meeting for Feb | 13/02/2022</BUTTON>

          <BUTTON as={Link} to='/April2022Meeting' 
          className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
            Minutes of the Meeting for April | 10/05/2022</BUTTON>

          <BUTTON as={Link} to='/May2022Meeting' 
          className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
            Minutes of the Meeting for May | 8/05/2022</BUTTON>

          <BUTTON as={Link} to='/June2022Meeting' 
          className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
            Minutes of the Meeting for  June | 8/05/2022</BUTTON>

          <BUTTON as={Link} to='/Sept2022Meeting' 
          className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
            Minutes of the Meeting for Sept | 13/05/2022</BUTTON>

         

          <BUTTON className='constution shadow-none border-none outline-line px-5 py-2 text-decoration-none text-light '
          as={Link} to='/Minutes'>
            Click to navigate Back to the Constitution Page</BUTTON>
          </p>
          </div>
          <Row>
          <>
          </>
          </Row>
          </ROW>
         
        </Container>
      </Container>
  {<Footer/>}
 </div>
    
  )
}

export default Match2022Meeting

const ROW = styled(Row)`
position:relative;
min-height:80vh;
height:auto;
@media(max-width:992px){
  margin-bottom:15rem !important;

}
`
const TextPage = styled.div`
min-height:100vh !important;
height:auto;
padding-right:2rem !important;
margin-bottom:5rem !important;
@media(max-width:992px){
  padding-right:2rem !important;
}
`
const BUTTON = styled(Button)`
border-radius:10px !important;
:not(.constution){background-color: #1c1cf0  !important;
border: 0px solid;
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





  


