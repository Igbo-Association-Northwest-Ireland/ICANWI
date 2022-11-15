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


    const May2022meeting = () => {
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

            <h2><strong>May Minutes of the Meeting</strong></h2>
            <p><b>Date:</b> 8/05/2022</p>

            <p><strong>Members Present:</strong> Kingsley, Obodoechina, Francis, Emeka, Ugo, Billy </p>
            <p><strong>Absentees:</strong> CJ, obinna, Chuks and Eloka</p>
               
            <p><strong>Proceedings:</strong> The Meeting was called to order at 5:00 PM. Open prayer was said by Kingsley. The minutes of the last meeting were read by Francis. It was approved by the chairman and seconded by Ugo. The issue discussed was not limited to but more focused on membership retention. The minutes were taken by francis. The chairman in his open address expressed appreciation to all members present at the meeting and in a spirit of genuine inquiry asked about those absent.
            </p>
            <p>
             Regarding the issue of membership retention, he expressed concerns about how members like CJ and Eloka have refused to observe a simple protocol. They do not attend meetings nor ask for excuses - even when it's obvious there isn't a reasonable excuse for their absence, and if there is, the association is unaware of it. Given the sensitive nature of the issue, the chairman urges caution in dealing with it as there is a possibility that this could cause confusion if not handled carefully. 

             </p>
            <p>
            Francis and Kingsley thought that the constitution has to be followed since it has provisions regarding such issues. This implies that a member or group of members who have defaulted from the association will cease to be a constitutional member pending the completion of the constitution's requirements for reactivating their membership.
            </p> 
            <p>
            Billy was of the opinion that the association should be thinking of growing its membership becuase members are the lifeblood of any organization - that organization could become irrelevant and fade away if the membership is not growing. He expressed concern about the way members are leaving the group. He warned that such sitiuation could affect the association's effectiveness in fulfilling its mission. In order to arrest this situation, he urged the association to provide inclusive leadership and deliver added value to the members. He noted that CJ is facing difficulties at the moment, and the association would be an asset to his situation. 
            </p>
            <p>
            Kingsley on the other hand, believed that the association has functioned effectively to grow and sustain members. It has provided support and encouragement to its members and has been an integral part of the community through participation, volunteering, and charitable giving. It has worked so hard to promote its image and protect its reputation in society. In referring to CJ's condition, he said that he had contacted CJ through all possible avenues, but he was not responding. Ugo and others confirmed that CJ was not answering their calls as well. After much discussion, it was decided that Billy should reach out to CJ, and Emeka should speak with Eloka before the next meeting.
            </p>
          
              <p><strong>Any Other business:</strong>In keeping with our tradition, members extended a warm welcome to a guest who introduced himself as Mr. Soluchi Nwaosu, aka Soki. He is a medical doctor by profession hailing from the Nnewi community in Anambra, Nigeria. He expressed his satisfaction with the organization's vision, especially its efforts to promote unity and love among the Igbos in the Northwest. He promised to be a part of this noble cause and to make himself available whenever he could
              <br/>
              Billy brought a bottle of wine to the association to officially announce his engagement party. Billy was commended by Kingsley for his regard for the association and for taking the necessary steps. Speaking on behalf of the association, he promised maximum compliance and support for the engagement party
              </p>
              <p><strong>Finance:</strong>
              The sum of €60 was collected for the dues and was given to Kingsley.
              The motion for adjournment was moved by francis, seconded by VC at 8:00 pm.  

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

export default May2022meeting
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



