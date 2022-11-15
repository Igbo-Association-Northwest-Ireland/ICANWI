import {React, useRef} from 'react'
import April2022Meeting from './April2022Meeting';
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


    const Oct2019Meeting = () => {
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
          <TextPage className='jumbotron p-5 relative top-20 bottom-20 pb-10 text-justify'>

            <h2><strong>October Minutes of the Meeting</strong></h2>
            <p><b>Date:</b> 13/10/2019</p>

            <p><strong>Members Present:</strong> Kingsley, Obodoechina, Francis, Emeka, Ugo, Chuks, Eloka and Billy </p>
            <p><strong>Absentees:</strong> CJ and Jerry Obi </p>

            <p><strong>Agenda:</strong></p>
            <ul> 
                <li className='li-circle'>Charitable Status</li>
                <li className='li-circle'>End of Year Party</li>
                <li className='li-circle'>Igbo Association Dublin Update</li>
                <li className='li-circle'>Our 10th Anniversary/Iwaji Planning</li>
                <li className='li-circle'>Any Other Business</li>
                <ul></ul>
                <ul></ul>
                <ul></ul>  

            </ul>
      
               
            <p><strong>Proceedings:</strong> The Meeting was called to order at 5:45PM. Minutes was taken by francis, Open prayer was said by Kingsley, The minutes of the last meeting were read by francis and motion to approve it was made by Kinsley, seconded by Chuks 
            </p>

            <p><strong>Charitable Status:</strong>  Vc Chariman reliable imformed the associaton that the constitutional amendment committe has met and the consitution has been amended accordingly. Both the name of the associaton and Members previledge were touched. Registration fee has been changed to €25 for the employed and €15 for the unemployed. The amended constitution will be reviewed further, after which it will be circulated before the next meeting.
            </p>

            <p><strong>End of Year Party:</strong>
            <ul>
                <li><strong><u className='text-danger text-bold'>VENUE:</u></strong>  Vc suggested iLico Studio in Derry, Emeka suggested Finn Valley Stranorlar and Ugo suggested Community Center Letterkenny. Considering the size, cost and suitabilty of the locations including their availabity by date, iLico Studio was chosen. The issue of immigration related to Brexit and hard borders was raised by Nchedo, but no worries were expressed.
                </li>
                <li><strong><u className='text-danger text-bold'>Cooking:</u></strong>  Kingsley confirmed that the women had consented to make the food and that a meeting had already been scheduled to discuss terms. He suggested that we agree on an amount that we would be prepared to spend on food. Françis suggested 300 euros. Some members said 400 euros and others said 350 euros. During a quick vote, 350 euros were approved. In the end, 400 euros were agreed upon for logistical reasons. Furthermore, members were asked to decide whether a simple family get-together or an elaborate party would be more suitable for them this year. It was agreed to keep it low-key and members could bring no more than three invitees.
                </li>
               </ul>
            
            </p>
            <p><strong> Igbo Association Dublin Invitation Update:</strong> The invitation was not honored due to some circumstances beyond our control and apologies have already been sent to the group expressing our deepest concerns. To show our support, VC suggested we send them 50 euros, just as we did with the Aloma group. There was no disagreement.
            </p>
            <p><strong>Iwaji / 10th Anniversary Festival :</strong>  Chairman proposed pre-event planning for each event on the line, as it will help us to understand everything that needs to be done, or not done, before the event in order to ensure effective implementation and the attendee experience. According to Emeka, both Iwaji and Xmas parties should be held first, with dues being raised to €20 as part of the preparation, and hybrid planning should be used. Chuks believed that Iwaji and 10th anniversary should come first due deep connection they have with what we represent as a group and Igbos. He also supported the idea of pre-event planning as it will enhance the best use of resources. In addition, he recommended August 2020 as a suitable month for the events. Kinsley supported Chuks, but recommended cancelling the Xmas Party for that year "2020" in order to avoid conflicts in schedules and shortages in resources. In the end, it was agreed that the event would take place during the second week of September, 2020 and the event committee will be formed at the next meeting
            </p>
            <p><strong>Any Other Business:</strong> He believes Xmas Part is not a cultur or  tradition of Igbos, so he will not support it. He recommended the New Yam Festival instead, arguing that NYM is a significant Igbo culture/tradition and celebrating it is essential for communicating Igbo culture to our children. Also, it would promote individual and family social life by bringing them together under the umbrella of Ndi Igbo cultural and life style. In addition, he said that the association had not been as active as they had expected. He urged them to buckle up and be more engaged. Contrasting the notion of activeness, VC completely disagreed with Nchedo, highlighting that the Xmas party has always been a successful approach to promoting social engagement and our cultural values. Obinna believed that the association had been active enough, but Nchedo probably came during a time when things were quite hectic due to the pandemic.
            </p>
            <p>Following Nchedo's argument regarding activeness, Ugo brought up football and wrestling as ideal activities for our integration objective. Francis reminded the association that we are the custodians of Igbo tradition in Ireland, and as such, our decision should be aligned with our goal to anticipate and promote Igbo culture 
              <br/>
              <strong className='text-danger'><u>New Membership/Registration:</u></strong>  During the meeting, Uche Alum from Enugu state of Nigeria expressed interest in joining the group. However, he noted that his current situation might make it challenging for him to pay dues and attend meetings on a regular basis. Chair and Vc accepted the condition and also commended him for his courage and interest in creating rapport with his brothers. Chuks suggested that he should  pay only days he is available. Obinna objected, maintaining that he should pay his dues accordingly like other members. Finally, it resolved that he should be paying his dues but exempted from other contributions pending when his condition changes 
            </p>
          
              <p><strong>Finance:</strong> The sum of €145 was collected, €110 was given to Ugo for thanksgiving invite and meeting hosting. the balance was given to the treasurer. The motion for adjournment was moved by Chuks, seconded by Francis at 7:30 pm. The next meeting is scheduled for Nov 10th, 2019. The closing prayer was said by Francis. 
              </p>
           
          </TextPage>
          </div>
          <div className = 'col col-sm-12 col-md-12 col-lg-5 Columns relative top-32'>
          <h3 className='d-flex w-100'><span><FaRegCalendarCheck className='mt-1 mx-1 me-2 text-red-700'/></span>Meeting Minutes by Date</h3>
            <p className ='relative top-12 left-2 grid grid-cols-1 gap-3 button-page'>
        
          

          <BUTTON className='px-5 py-2 text-decoration-none text-light shadow-none border-none  outline-line' as={Link} to= '/Feb2022Meeting'>
            Minutes of the Meeting for Feb | 13/02/2022</BUTTON>

            <BUTTON className='px-5 py-2 text-decoration-none text-light shadow-none border-none  outline-line' as={Link} to= '/Match2022Meeting'>
            Minutes of the Meeting for March | 13/04/2022</BUTTON>

            <BUTTON className='px-5 py-2 text-decoration-none text-light shadow-none border-none  outline-line' as={Link} to= '/April2022Meeting'>
            Minutes of the Meeting for April | 10/04/2022</BUTTON>

            <BUTTON as={Link} to='/May2022Meeting' 
          className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
            Minutes of the Meeting for May | 8/05/2022</BUTTON>

            <BUTTON className='px-5 py-2 text-decoration-none text-light shadow-none border-none  outline-line' as={Link} to= '/June2022Meeting'>
            Minutes of the Meeting for June | 12/04/2022</BUTTON>

            <BUTTON className='px-5 py-2 text-decoration-none text-light shadow-none border-none  outline-line' as={Link} to= '/Sept2022Meeting'>
            Minutes of the Meeting for Sept | 18/04/2022</BUTTON>

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

export default Oct2019Meeting
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



