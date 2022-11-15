
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

const Sept2022Meeting = () => {
  return (
    <div className='relative h-100vh'>
    { <PrivatePageLink mode={Modals} className='fixed top-0' />}
      <Container className='fluid text-dark ' style={{ minHeight: '100vh', height: 'auto' }}>
        <Container>
          <ROW className='main-row'>
            <div className = 'col col-sm-12 col-md-12 col-lg-7'>
          <TextPage className='jumbotron p-5 relative top-20 bottom-20 pb-10 text-justify'>

            <h2><strong> September Minutes of the Meeting</strong></h2>
            <p><b>Date:</b> 18/09/2022</p>

            <p><strong>Members Present:</strong> Kingsley Agoha, Austine Okeagu, Charles Obodoechina, Francis Udoku, Emeka Onwunzo, Dozie, Chidi Usanga and Ugo Nwankwo </p>
            <p><strong>Absentees:</strong> Chuks Ogujawa, Billy and Chidiebere</p>
               
            <p><strong>Proceedings:</strong> Minutes were taken by Charles Obodoechina and the open prayer was said Pastor Gabriel.
              As usual, the chairman welcomed everyone.
            </p>

            <p><strong>Relay4Life Update:</strong> Chairmen ask Francis to give members the update about the relay for life. Francis explained all about the participation and the donations towards the event. He added that the organisers are so happy that we followed all due protocol, showed the beautiful colours that was expected which is one of the reason the certificate is issued to Igbo Association Northwest Ireland.
Chairman expressed his happiness towards the support of everyone especially Francis for all his maximum effort that gave us the room to achieve all.

          </p>
            <p><strong>Charity status:</strong>
            Ugo expressed his thanks to all that participated at the the relay for life event and explained this is one of the reasons we have to complete our step in getting the Charity status.
This was supported by Kingsley and ask members on how to get the application completed because we all are busy with our daily work. After much deliberation,  it came to conclusion that this will be circulated to members to look into it and come up with the answers at the next meeting.

          </p>
            <p><strong>Banks/Finacial Update:</strong>
            During the meeting, the chairman outlined the amount we have in the bank and on hand: €680 in the bank and €105 in cash. In the month of August, 125 euros were realized, even though a meeting was not possible due to conflicts in schedules/other obligations.

Ugo accepted to communicate to  Chuks to help solve signatories also Francis advice and accept to join them and everyone accepted the idea.

Kingsley thanks ugo and Francis for the effort pledged. Kingsley explained how he dealt with the 50 euros Chuks thought he owns and ask anyone to refer to the minutes of during that period if any one is in doubt. 
Chairman thanks Kingsley for the explanation and apologies to him and Chuks in any both understand the message. 
Francis also thank Kingsley and Chuks in understanding each other treating the matter without fuss.

          </p>
            <p><strong>End of the Year Party:</strong>
            
          </p>
            <p><strong>Relay4Life Update:</strong>
            
          </p>
              
              
 
        
            <p><strong>Finance: </strong>
            80 EUROS collected from 8 members present.

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

            <BUTTON as={Link} to='/Match2022Meeting' 
          className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
            Minutes of the Meeting for March | 13/05/2022</BUTTON>

            <BUTTON as={Link} to='/April2022Meeting' 
          className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
            Minutes of the Meeting for April | 10/05/2022</BUTTON>
          
            <BUTTON as={Link} to='/May2022Meeting' 
          className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
            Minutes of the Meeting for May | 8/05/2022</BUTTON>
          
            <BUTTON as={Link} to='/June2022Meeting' 
          className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
            Minutes of the Meeting for June | 12/05/2022</BUTTON>
          
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

export default Sept2022Meeting

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
border-radius: 10px !important;
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