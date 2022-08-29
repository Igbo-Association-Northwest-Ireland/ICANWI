import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import styled from 'styled-components';
import masq from '../image/masq.png'
import charity from '../image/charity.jpg'
import blacklife from '../image/blacklife.jpg'
import stpatrick from '../image/stpatrick.jpg'
import stpatrick2 from '../image/stpatrick2.jpg'
import tidytown from '../image/tidy1.jpg'
import support from '../image/support.jpg'
import video1 from '../video/bg-video.mp4'


const Activities = () => {
  return (
    <div className='jumbo1'>
      <ROWS>
        <COLHeader className='what-we-do-title'>
        <h3>What We Do</h3>
        <video autoPlay muted loop>
          <source src={video1} type="video/mp4" muted preload="metadata" loop/>
          Your browser does not support the video tag.
           </video>
        </COLHeader>

        <ROW className='CardCover m-auto my-2'>
        <COL className=' col-sm-4'>
            <div className='imgs'>
            <img src={masq} className="img-fluid rounded-start  "
            alt="..." />
            </div>
    <p>Cultural Integration</p>
    <div className=' text '>Building a community 
    where everyone lives as brothers and sister 
    is the integral objective and focus of this group. 
    We have been committed in achieving unity and
    peace through cultural diversity and inclusion
    </div>
    </COL>

    <COL className=' col-sm-4'>
        <div className='imgs'>
            <img src={stpatrick} 
            className="img-fluid rounded-start  "
                alt="..." />
        </div>

                        
            <p>Community Engagment</p>
            <div className=' text '>
              while the communities have a lot to offer to us but the question begging for answer is what do we have to give back to the community. ICANWI from the inception of its existence has been a devoted part of the community through participation and volunteering
                </div>
                </COL>
                
                    <COL className=' col-sm-4'>
                    <div className='imgs'>
                    <img src={blacklife} className="img-fluid rounded-start  "
                        alt="..." />

                    </div>

                      
                    <p>Equality and Diversity</p>
                <div className=' text '> 
                Loneliness is a burden but having the sense of walking alone is mentally distressing. Our focus is on building one tent that can accomodate everyone regardless your race or genda. Through cultural diversity and inclusion, we have journed through this path
                </div>
                </COL>
                
                    <COL className=' col-sm-4'>
                    <span className='imgs bg-dark'>
                    <img src={tidytown} className="img-fluid rounded-start  "
                        alt="..." />
                    </span>

                        
                    <p>Volunteering</p>
                <div className=' text '> We have offered assistance to the community and to people in need through volunteering and participation. However, it has also helped members make friends, learn new skills, and develop their careers</div>
                </COL>
                
                    <COL className=' col-sm-4'>
                    <div className='imgs'>
                    <img src={charity} className="img-fluid rounded-start  "
                        alt="..." />

                    </div>
                        
                    <p>Charity Activities</p>
                <div className=' text '> Despite the ongoing display of political instability, corruption, and deadly diseases in the world, we continue to pray for God's grace and seek support from humanity to help those who are in need and vulnerable </div>
                      </COL>
                        
                          <COL className=' col-sm-4'>
                          <div className='imgs'>
                          <img src={support} className="img-fluid rounded-start  "
                               alt="..." />
                          </div>
                             
                          <p>Follow up</p>
                      <div className=' text '>As the world  continues with the shared display of political instabilies and corruption and rising of deadly sickness, we continues to seek  grace from God and support from humanity to support those who are in need and vulnerable 
                      </div>
                </COL>     
         </ROW>
      </ROWS>
    </div>
  )
}

export default Activities

const ROW = styled(Row)`
display:flex;
justify-content:center;
align-items:center;
@media(max-width:992px){
margin-top:2rem !important;
}
`

const ROWS = styled(Row)`
margin:0;
position:relative;
box-sizing:border-box;
`
const COLHeader = styled(Col)``


const COL = styled(Col)`
box-shadow: 
rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; 
position:relative;
border-bottom:1px solid #1e154e;
margin-left:3px;
min-width:400px;
max-width:410px;
min-height:410px;
margin-bottom:10px;

p{
font-weight:700 !important;
color:#1e154e !important;
font-size:1.2rem;
width:100%;
position:absolute;
top:55% !important;
}
.text{
margin-top:17%;
line-height:28px;
color:black;
font-weight:400;
word-wrap:break-word;
font-size:15px !important;
font-family: 'harlow' italic;
text-shadow: white 1px 0 10px;
    
}
img{
margin-top:3%;
margin-left:10%;
min-height:180px;
max-height:180px;
min-width:280px;
max-width:280px;
box-shadow: 
rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, 
rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}


@media(max-width:992px){
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-width:600px; 
margin-top:5%;
box-shadow:none !important;
img{
    margin-top:3%;
    margin-left:0 !important;
    }
 p{
    left:7%;
    top:57% !important;
 }
 .text{ position:relative;
    padding:0 5rem !important;
    margin-top:9% !important;
   }
}
@media(max-width:786px){

min-width:400px;
max-width:410px;
min-height:410px;
margin-bottom:10px;
box-shadow: 
rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

p{
font-weight:700 !important;
color:#1e154e !important;
font-size:1.2rem;
width:100%;
position:absolute;
top:50% !important;
padding: 0 !important;

}
.text{
   margin-top:17%;
   line-height:28px;
   color:black;
   font-weight:400;
   word-wrap:break-word;
   font-size:15px !important;
   font-family: 'harlow' italic;
   text-shadow: white 1px 0 10px;
   padding: 6% 5% !important;
    
}
img{
    margin-top:3%;
    margin-left:10%;
    min-height:180px;
    max-height:180px;
    min-width:280px;
    max-width:280px;

}   
}
@media(max-width:540px){
    box-shadow: 
rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    max-width:100% !important;
    min-width:100% !important;
    height:auto;
    p{

top:55% !important;
padding: 0 !important;
left:8%;

}
img{
min-height:200px;

min-width:calc(32rem - 100px) !important;
max-width:48rem !important;

}
}
`

/* font-family: 'Open Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'PT Sans', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Roboto', sans-serif; 
 
 background: #6a85b6;*/