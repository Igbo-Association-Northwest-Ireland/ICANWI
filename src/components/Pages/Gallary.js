import React from 'react'
import '../../CSS/ExternalPages.scss'
import styled from 'styled-components'
import {Col, Container, Row, Card} from 'react-bootstrap'
import men1 from '../Pages/picture/men1.jpg'
import ladies1 from '../Pages/picture/ladies1.jpg'
import ladies2 from '../Pages/picture/ladies2.jpg'
import frxmas from '../Pages/picture/frxmas.jpg'
import afrikday1 from '../Pages/picture/AfrikDay1.jpg'
import kcfd from '../Pages/picture/kcfd.jpg'
import ladies3 from '../Pages/picture/ladies3.JPG'
import aniversary from '../Pages/picture/group-aniversary.jpg'
import stpatrick from '../Pages/picture/stpatrick.jpg'
import kidsAd from '../Pages/picture/kids1.JPG'
import elders from '../Pages/picture/elders.jpg'
import men5 from '../Pages/picture/men5.jpg'
import kidsport from '../Pages/picture/kidsport.jpg'
import rev from '../Pages/picture/rev.PNG'
import charity1 from '../Pages/picture/charity1.jpg'
import promotion from '../Pages/picture/promotion.jpg'
import masq from '../Pages/picture/masq.jpg'
import group1 from '../Pages/picture/groupPic1.jpg'
import men6 from '../Pages/picture/men6.jpg'
import men4 from '../Pages/picture/men4.jpg'
/* import stpatrick3 from '../Pages/picture/patrick3.jpg'
 */import stpatrick2 from '../Pages/picture/stpatrick2.jpg'
import kellymanus from '../Pages/picture/kellymanus.jpg'
import PageNavigstions from '../Header/DropdownContainer/PageNavigations'
import Footer from '../Footer/Footer'
import Modals from '../Header/DropdownContainer/Modals'

const Gallary = () => {
  return (
 <>
 { <PageNavigstions mode={Modals} className='fixed top-0' />}
 <Containers className='fluid min-w-full min-h-full mt-5' style={{background:'#0644a72'}}>
 

 <Containers className='bg-olive-700'>
     <div className='p-5 relative top-8 text-center mt-5
   w-100' /* style={{background:'#f3f113'}} */>
    <h4 className='absolute top-8 left-0 right-0 bottom-0'
    style={{color:'#0644a72'}}>Humanism in photograph | A means of social commentary</h4>
    <p></p>
    </div>

<div className="row image-row mt-5">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 base-1">
    <img
      src={afrikday1}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={elders}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>{/* <----col1---> */}

  <div className="col-lg-4 mb-4 mb-lg-0 base-2">
    <img
      src={masq }
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src={ladies1}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>{/* <--------col2----> */}

  <div className="col-lg-4 mb-4 mb-lg-0 base-3">
    <img
      src={kellymanus}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={frxmas}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
 {/* <Card.....>End of first Row */}



  <div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
    <img
      src={men1}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={stpatrick2}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={kcfd}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src={ladies3}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={promotion}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={men4}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
  </div> {/* END OF SECOND ROW */}

  {/* CUSTOM COLLECTIONS */}


  
</Containers>
{<Footer/>}
</Containers>

</>
  )
}

export default Gallary
const Containers = styled(Container)`
.image-row img{
  object-fit:cover;
  position: center center;
  }
 
`