
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

const April2022Meeting = () => {
  return (
    <div className='relative h-100vh'>
    { <PrivatePageLink mode={Modals} className='fixed top-0' />}
      <Container className='fluid text-dark ' style={{ minHeight: '100vh', height: 'auto' }}>
        <Container>
          <ROW className='main-row'>
            <div className = 'col col-sm-12 col-md-12 col-lg-7'>
          <TextPage className='jumbotron p-5 relative top-20 bottom-20 pb-10 text-justify'>

            <h2><strong> April Minutes of the Meeting</strong></h2>
            <p><b>Date:</b> 10/04/2022</p>

            <p><strong>Members Present:</strong> Kingsley, Obodoechina, Francis, Emeka, Ugo </p>
            <p><strong>Absentees:</strong> CJ, Billy, Chuks, Obinna and Eloka</p>
               
            <p><strong>Proceedings:</strong>
            The Meeting was called to order at 5:45PM. Open prayer was said by Francis. The minutes of the last meeting were read by francis and motion to approve it was made by Kinsley, seconded by chairman. The Items discussed were not limited to <u className='text-danger' >charitable status application </u>and <u className='text-danger'>Relay 4 life event Invitation.</u> The minutes were taken by Francis as well
            </p>

              
              <p>
              Regarding charitable status, the chairman assured the association that the application process is in progress, and updates would be provided at subsequent meetings until the application is approved. Vc, in his remarks, encouraged the association to be persistent and courageous in working towards the achievement of charitable status.
              </p>

              <p>
              Regarding the Relay 4 life event Invitation: Ugo said that the event is a strategic one and since it is a community engagement initiative, taking part is a proactive step to increase our presence in the community. He encouraged the association to give it a thought. VC agreed with Ugo, emphasizing the importance of participation in light of our core values. In the end, a consensus was reached regarding participation 
              </p>

              <p>
              The participation led to further discussions about what type of event would be most effective in raising funds. Chairman suggested on site Masquerade dancing activity, VC suggested children dancing, and proposed the idea of raising money prior to the event. Ugo suggested asking the event organizers first. The next meeting will review both the potential activities and the logistic of that day.
              </p>

              <p>
              Another discussion brought up was the issue of members failing to attend meetings without permission. Chairman asked if he should send those involved a query letter regarding absenteeism. VC suggested that we should follow our constitution. Members should either abide by it or risk losing their membership. Ugo and Francis supported the suggestion. Regarding Eloka's membership, chairman promised to take the necessary actions before the next meeting.
              </p>

              <p><strong>Any Other business:</strong>  it was agreed that members should be available for activities such as Tidy Town and other related activities in their local area. Also, during the meeting, Mrs Obi visited, accompanied by her son and Madam Florence. She presented drinks to the association as a token of appreciation for the efforts and sacrifices made in ensuring that the repatriation and funeral of her late husband was successfully achieved. Members praised her bravery and thanked her for the noble visit, recognising that the visitation is an important step that many others would have overlooked.
              </p>
            <p><strong>Finance: </strong>
            The sum of €50 + £10 was collected for the dues. €10 each was given to Ugo and Chuks as part of their payment. The motion for adjournment was moved by francis, seconded by Emeka at 8:00 pm.  
           The next meeting is scheduled for May 8, 2022, and will be hosted by Ugo
         The closing prayer was said by Francis

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
          
          
            <BUTTON as={Link} to='/May2022Meeting' 
          className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
            Minutes of the Meeting for May | 8/05/2022</BUTTON>
          
            <BUTTON as={Link} to='/June2022Meeting' 
          className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
            Minutes of the Meeting for June | 12/05/2022</BUTTON>

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
  {<Footer/>}
 </div>
    


  )
}

export default April2022Meeting

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