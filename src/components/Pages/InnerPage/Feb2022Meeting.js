import {React, useRef} from 'react'
import April2022Meeting from './Match2022Meeting';
import { Container, Row, Col, Button } from 'react-bootstrap'
import PrivatePageLink from '../../Header/DropdownContainer/PrivatePageLink';
import Footer from '../../Footer/Footer';
import { TableFooter } from '@mui/material';
import Modals from '../../Header/DropdownContainer/Modals';
import styled from 'styled-components';
import {Routes, Route, Navigate, Link } from 'react-router-dom';
import {useNavigate} from 'react-router';
import Minutes from '../Minutes';
import {FaQuoteLeft, FaQuoteRight, FaRegCalendarCheck} from 'react-icons/fa'

const Feb2022Meeting = () => {
    let navigation = useNavigate;
    let refs = useRef(null);
    function navigate(){
      return <Navigate to='/Minutes'/>
      }
      function reference(){
       refs.current.style.background='red';
      }
  return (

    <div className='relative h-100vh'>
    { <PrivatePageLink mode={Modals} className='fixed top-0' />}
      <Container className='fluid text-dark ' style={{ minHeight: '100vh', height: 'auto' }}>
        <Container>
          <ROW className='main-row'>
            <div className = 'col col-sm-12 col-md-12 col-lg-7'>
          <TextPage className='jumbotron p-5 relative top-20 bottom-20 pb-10 text-justify febmeeting2022'>

            <h2><strong>February Minutes of the Meeting</strong></h2>
            <p><b>Date:</b> 13/02/2022</p>

            <p><strong>Members Present:</strong> Kingsley, Obodoechina, Francis, Emeka, Ugo, Chuks obinna </p>
            <p><strong>Absentees:</strong> CJ, Billy, Eloka and Obinna</p>
            <p>
                <strong><h6>Agenda:</h6></strong>
                <ul>
                    <li>Stanley's Membership Review</li>
                    <li>Obi's Repatriation and Funeral Updates</li>
                    <li>Financial Statement / Repatriation Expenses</li>
                    <li>Charitable Status review</li>
                    <li>St Patrick Event</li>
                </ul>
            </p>
               
            <p><strong>Proceedings:</strong> <br/>The Meeting was called to order at 5:50PM. Open prayer was said by Francis. Minutes of the last meeting were taken also taken by Francis and approved as corrected by Chuks</p>

              <p><strong>Obi's Repatriation and Funeral Updates</strong> As the Chairman welcomed everyone to the meeting, he expressed gratitude for the extra effort and commitment that members put into repatriating Jerry Obi. He also asked if there was something that could be done differently in the future. Kinsley said that everything went according to plan 
            praising the members for their commitment.<p>Chuks also agreed that the repatriation event was a success - speaking highly of the successful fund raising and wake, both of which he viewed as great and encouraging achievements. However, he did note that members need improvement on the compliance with all agreements and condition relative to the conduct of any events such dressing code, dancing and other form of socializing, suggesting that chairman at the time should try to enforce such arrangements or agreements.<br/>Kinsley, Obinna, and Chuks suggested that the host should be responsible for hosting, but he can only provide whatever he has. The later was approved by a majority vote
            </p>
            </p>

              <p><strong>Funeral Expenses / Repatriation Expenses:</strong> Prior to the meeting, the Treasurer and Vice Chairman had presented their financial statements to the group via WhatsApp. All funds released and expenses made were documented and accounted for accordingly. The motion to accept the statements as presented was moved by Francis and supported by all
              </p>

              <p><strong>Stanley's Membership Review:</strong> In accordance with our constitution, any member who leaves the group and subsequently wishes to re-join must submit a written request. As Stanley has not yet submitted his request, it was agreed to that his case should wait until he does
              </p>
              <p><strong>Charitable Status review:</strong> An application for charitable status was discussed, as well as issues regarding governance and standard requirements. A decision was reached to move forward with the application, where progress would be discussed at each meeting.
              </p>
              <p><strong>St Patrick Event:</strong> St. Patrick's event was genuinely discussed. However, considering the resources involved in the preparation and the amount of time and money it will take, it was decided to not participate this year. We look forward to coming back next year with style.
              </p>
              <p><strong>Any Other Business:</strong> Chariman suggested a condolence visit to Uche Alomu on a free will donation basis. Ugo also suggested a courtesy visit to the Nigerian Ambassador in Dublin. The suggestions were supported by everyone, but no date has been set yet
              </p>

              <p><strong>Finance:</strong> The sum of €60 was collected for dues, €40 + $10 were collected for food. €10 each was given to Chuks and Ugo as their part payment and  €40 was given to the treasurer.
              The motion for adjournment was moved by Francis, seconded by Vc at 7:45pm.  
              The next meeting is scheduled for Mar 13th, 2022. 
              The closing prayer was said by Francis. 
              </p>
            
            <Container>
              <Row className='d-flex justify-content-center align-items-center'><strong>A summary of the Dues and Payement</strong></Row>
              <Row>
                <Col>   <table>
              <thead>
                <tr>
                <th scope="col">Names</th>
                <th scope="col">Dues</th>
                <th scope="col">Paid for Food</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>Emeka</td>
                <td>€10 </td>
                <td>€10 </td>
             </tr>
              <tr>
                <td>Ugo</td>
                <td>€10 </td>
                <td>€10 </td>
             </tr>
              <tr>
                <td>Chuks</td>
                <td>€10 </td>
                <td>€10 </td>
             </tr>
              <tr>
                <td>Kingsley</td>
                <td>€10 </td>
                <td>£5 </td>
             </tr>
              <tr>
                <td>Francis</td>
                <td>€10 </td>
                <td>£5 </td>
             </tr>
              <tr>
                <td>Charley</td>
                <td>€10 </td>
                <td>€10 </td>
             </tr>
             </tbody>
              </table> 
              </Col>
              </Row>
            </Container>
             
        
          
           
          </TextPage>
          </div>
          <div className = 'col col-sm-12 col-md-12 col-lg-5 Columns relative top-32'>
          <h3 className='d-flex w-100'><span><FaRegCalendarCheck className='mt-1 mx-1 me-2 text-red-700'/></span>Meeting Minutes by Date</h3>
            <p className ='relative top-12 left-2 grid grid-cols-1 gap-3 button-page'>

        <BUTTON className='px-5 py-2 text-decoration-none text-light shadow-none border-none  outline-line' as={Link} to= '/Match2022Meeting'>
            Minutes of the Meeting for March | 13/04/2022</BUTTON>
        
          <BUTTON className='px-5 py-2 text-decoration-none text-light shadow-none border-none  outline-line' as={Link} to= '/April2022Meeting'>
            Minutes of the Meeting for April | 10/04/2022</BUTTON>

          <BUTTON className='px-5 py-2 text-decoration-none text-light shadow-none border-none  outline-line' as={Link} to= '/May2022Meeting'>
            Minutes of the Meeting for May | 8/05/2022</BUTTON>

          <BUTTON className='px-5 py-2 text-decoration-none text-light shadow-none border-none  outline-line' as={Link} to= '/June2022Meeting'>
            Minutes of the Meeting for June | 12/05/2022</BUTTON>

          <BUTTON className='px-5 py-2 text-decoration-none text-light shadow-none border-none  outline-line' as={Link} to= '/Sept2022Meeting'>
            Minutes of the Meeting for Sept | 18/05/2022</BUTTON>

          <BUTTON className='constution shadow-none border-none outline-line
           px-5 py-2 text-decoration-none text-light'
           as={Link} to='/Minutes'
           >Click to navigate Back to the Constitution Page</BUTTON>
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

export default Feb2022Meeting

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