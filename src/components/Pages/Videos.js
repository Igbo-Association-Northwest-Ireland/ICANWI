import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import VideoPlayer from 'react-video-js-player';
import {Card, Row, Container, Col} from 'react-bootstrap';
import video1 from '../Pages/VIDEOS/womenvideo.mp4';
import video2 from '../Pages/VIDEOS/menvideo.mp4';
import PageNavigstions from '../Header/DropdownContainer/PageNavigations';
import Modals from '../Header/DropdownContainer/Modals';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';


const Videos = () => {



  const poster ="https://fraigo.github.io/8a54a3c2-a2f5-4e38-9762-ea7fc12aa32d";
  const videoSrc = video1;
  const videoSrc2 = video2;

  return (
    <VID className='vd-player w-00   bg-slate-100'>
       {<PageNavigstions mode={Modals} className='fixed top-0'/>}
      <Container>
      <Row>
      <div className='p-5 relative top-8 text-center mt-5
   w-100' /* style={{background:'#f3f113'}} */>
    <h4 className='absolute top-8 left-0 right-0 bottom-0'
    style={{color:'#0644a72'}}>Motivation videos revives death hope</h4>
    <p></p>
    </div>
        <Col>
        <Card style={{width:'18rem'}}>
          <VideoPlayer
         src={videoSrc} 
         poster={poster} 
         />
        </Card>
        </Col>
        <Col>
        <Card style={{width:'18rem'}}>
          <VideoPlayer
         src={videoSrc2} 
         poster={poster} 
         />
        </Card>
        </Col>
      </Row>
     </Container>
    {<Footer/>}
    </VID>
  )
}

export default Videos
const VID = styled.div`
min-height:100vh !important;
`