
import { React, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PrivatePageLink from '../../Header/DropdownContainer/PrivatePageLink';
import Footer from '../../Footer/Footer';
import { TableFooter } from '@mui/material';
import Modals from '../../Header/DropdownContainer/Modals';
import styled from 'styled-components';
import { Routes, Route, useNavigate, Link, Navigate } from 'react-router-dom';
import Minutes from '../Minutes';
import { FaQuoteLeft, FaQuoteRight, FaRegCalendarCheck } from 'react-icons/fa'

const Oct2022Meeting = () => {
  return (
    <div className='relative h-100vh'>
      {<PrivatePageLink mode={Modals} className='fixed top-0' />}
      <Container className='fluid text-dark ' style={{ minHeight: '100vh', height: 'auto' }}>
        <Container>
          <ROW className='main-row'>
            <div className='col col-sm-12 col-md-12 col-lg-7'>
              <TextPage className='jumbotron p-5 relative top-20 bottom-20 pb-10 text-justify'>

                <h2><strong> October Minutes of the Meeting</strong></h2>
                <p><b>Date:</b> 9/10/2022</p>

                <p><strong>Members Present:</strong> Kingsley Agoha, Austine Okeagu, Chuks Ogujawa, Charles Obodoechina, Francis Udoku, Emeka Onwunzo, Billy Banda, Emmanuel </p>
                <p><strong>Absentees:</strong> Chijioke and Ugo, Chidi, Edozie, Chidiebere</p>

                <p><strong>Proceedings:</strong> Meeting was called to order at 5pm. The open prayer was said Emmanuel. The minutes were taken by the chairman and previous minutes were also read him. 

            <h4>Agenda 1</h4>
                </p>
                <p>
                  Francis explained in full details that the organizers sent a Thank You message to the Igbo association especially for our attendance and our full participation which made the event very colourful.

                  Vice also thanks all members for their participation especially Mr Francis who chaired and lead the event to our association.

                  Chairman asked Ugo and Emeka the feedback from Eloka,
                  Ugo replied that he spoke with Eloka and got the answer that Eloka is no more interested

                </p>

                <p>
                  Chuks asked if we have followed all the necessary steps according to constitution?
                  Francis answered that all steps has been followed and there is no need to write any letter as its not stipulated in the constitution.
                  Chuks agreed with Francis, that the constitution is what we have to follow
                  Chairman close Elokas case - emphasising that Eloka have told two members officially that he is no more a member after being inactive for more than six months and failed to engage in any activities without any reason whosoever. Therefore if he wishes to be a member , he will follow the returning members process

                </p>
                <p>
                  Chairman asked about the visitors/ new friends. Chuks answered that he spoke with Chidi who is in Litterkenny , Chuks said that Chidi will love to be back but he is having some health challenges and will be back as soon as possible.

                  hairman asking about Chijioke, Billy stated that he will get in touch with him which Chairman agree to ring Billy for an update.
                </p>

                <p><strong>Matters Arising:</strong> Mr Francis suggested that we upgrade our masquerade because it will attract more events to the association,
                  chairman agreed and to discuss in the next meeting

                </p>
                <p><strong>Finance: </strong>
                  80 EUROS collected from 8 members present.

                </p>
              </TextPage>
            </div>
            <div className='col col-sm-12 col-md-12 col-lg-5 Columns relative top-32'>
              <h3 className='d-flex w-100'>
                <span><FaRegCalendarCheck className='mt-1 mx-1 me-2 text-red-700' />
                </span>Meeting Minutes by Date</h3>
              <p className='relative top-12 left-2 grid grid-cols-1 gap-3 button-page'>



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

                <BUTTON as={Link} to='/Sept2022Meeting'
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes of the Meeting for Sept | 18/05/2022</BUTTON>

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
      {<Footer />}
    </div>



  )
}

export default Oct2022Meeting

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