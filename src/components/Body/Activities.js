import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import styled from 'styled-components';
import tidytown from '../image/tidy2.jpg'
import stpatarick from '../image/stpatrick.jpg'
import masq from '../image/masq.png'
import charity from '../image/charity.jpg'
import blacklife from '../image/blacklife.jpg'
import support from '../image/support.jpg'
import mypic from '../image/mypic1.jpg'




const Activities = () => {
  return (
    <div className='jumbo1'>
      <ROWS>
        <COLHeader>
        <h3>What We Do</h3>
        </COLHeader>
        <Row className='px-5 CardCover'>
         <COLCard>
                 
                          <WRAPPER className='p-3'>
                              <img src={masq} className="img-fluid rounded-start pr-3 "
                               alt="..." />
                          <p>Cultural Integration</p>
                      <div className='pb-3 text'>Building a community 
                      where everyone lives as brothers and sister 
                      is the integral objective and focus of this group. 
                      We have been committed in achieving unity and
                       peace through cultural diversity and inclusion

                      </div>
                      </WRAPPER>
                        
                          <WRAPPER className='p-3'>
                              <img src={stpatarick} className="img-fluid rounded-start pr-3 "
                               alt="..." />
                          <p>Community Engagment</p>
                      <div className='pb-3 text'>
                      A common fact is that the communities have a lot to offer to us but the question begging for answer is what do we have to give back to the community. ICANWI from the inception of its existence has been a devoted part of the community through participation and volunteering
                      </div>
                      </WRAPPER>
                        
                          <WRAPPER className='p-3'>
                              <img src={blacklife} className="img-fluid rounded-start pr-3 "
                               alt="..." />
                          <p>Equality and Diversity</p>
                      <div className='pb-3 text'> 
                      Loneliness is a burden but having the sense of walking alone is mentally distressing. Our focus is on building one tent that can accomodate everyone regardless your race or genda. Through cultural diversity and inclusion, we have journed through this path
                      </div>
                      </WRAPPER>
                        
                          <WRAPPER className='p-3'>
                              <img src={tidytown} className="img-fluid rounded-start pr-3 "
                               alt="..." />
                          <p>Volunteering</p>
                      <div className='pb-3 text'> We have offered assistance to the community and to people in need through volunteering and participation. However, it has also helped members make friends, learn new skills, and develop their careers</div>
                      </WRAPPER>
                        
                          <WRAPPER className='p-3'>
                              <img src={charity} className="img-fluid rounded-start pr-3 "
                               alt="..." />
                          <p>Charity Activities</p>
                      <div className='pb-3 text'> Despite the ongoing display of political instability, corruption, and deadly diseases in the world, we continue to pray for God's grace and seek support from humanity to help those who are in need and vulnerable </div>
                      </WRAPPER>
                        
                          <WRAPPER className='p-3'>
                              <img src={support} className="img-fluid rounded-start pr-3 "
                               alt="..." />
                          <p>Follow up</p>
                      <div className='pb-3 text'>As the world  continues with the shared display of political instabilies and corruption and rising of deadly sickness, we continues to seek  grace from God and support from humanity to support those who are in need and vulnerable </div>
                      </WRAPPER>      
             </COLCard>
         </Row>
      </ROWS>
    </div>
  )
}

export default Activities
const ROWS = styled(Row)`
margin:0;
position:relative;
box-sizing:border-box;
`
const COLHeader = styled(Col)`
display:flex;
justify-content: center;
align-items:middle;
text-align: center;
padding: 3rem 0 1.5rem 0;
margin-bottom:1%;
color:#1e154e;
background:whitesmoke;
h3{
font-weight:500 !important;
font-size:1.5rem !important;
}
`
const COLCard = styled(Col)`
display:grid;
grid-template-columns:repeat(3, auto);
border:1px solid #1e154e;
gap:8px;
border:none !important;
`


const WRAPPER = styled.div`
max-height:280px;
min-height:280px;
max-width:500px;
margin-bottom:10%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
position:relative;
border-bottom:1px solid #1e154e;
gap:10px;

                    
p{
font-weight:800 !important;
color:#1e154e !important;
font-size:1rem;
width:100%;
}
.text{

   line-height:26px;
   color:gray;
   font-weight:500;
        word-wrap:break-word;
        font-size:14px !important;
        font-family: 'Montserrat', sans-serif;
        text-shadow: lightgray 1px 0 10px;

}
img{margin-left:-2%;
    float:left;
    max-height:150px;  
    max-width:200px; 
    min-width:200px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}
`
/* font-family: 'Open Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'PT Sans', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Roboto', sans-serif; 
 
 background: #6a85b6;*/